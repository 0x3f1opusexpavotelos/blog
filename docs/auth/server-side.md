SSR frameworks move rendering and data fetches to the server, to reduce client bundle size and execution time.



to store the user session in cookies instead of local storage
It provides a framework-agnostic way of creating a Supabase client.


refer to the official server-side rendering guides for the latest(upToDate) best practices on using this package in your SSR framework of choice.



session represent by access token in the form of JWT

In client-side rendering Applications(SPA)  these are stored in local storage.
For applications where Server-Side Rendering frameworks are used, the access and refresh token need to also be accessible by the server.
By storing the access token and refresh token in cookies

## design

### Cookie chunking strategy:
1. If the value to be stored is <= 3180 bytes, then it's stored under the full
   cookie name.
2. If the value is >= 3180 bytes, it's split in chunks of 3180 bytes.
   The name of the cookie takes the form `key.chunk_index` where `key` is the
   key for storing the value and `chunk_index` is the 0-based index of the
   chunk.


The operation for reading a stored item with the key `key` is as follows:

1. If there's a cookie with a full name `key`, use its value.
2. For each index starting at `0` if there's a `key.index` cookie, join its
   value with the previous index. If there's no value, stop processing.


The operation for reading a stored item with the key `key` is as follows:

1. If there's a cookie with a full name `key`, use its value.
2. For each index starting at `0` if there's a `key.index` cookie, join its
   value with the previous index. If there's no value, stop processing.

These algorithms were introduced in versions <= 0.3.0 and are kept for
their simplicity.


ensure handling these state changes with regards to a stored item's value:

1. _Non-chunked to chunked._ If a value for an item previously fit in a
   non-chunked cookie, but now it needs to be split amongst multiple cookies:
   - The non-chunked cookie must be _removed_ (i.e. set to `Max-Age=0`).
2. _More chunks to less chunks._ If a value for an item previously fit in 3
   chunks but now needs to fit in 2 chunks:
   - The chunks from the end, e.g. `key.2` must be _removed_ (i.e. set to
     `Max-Age=0`).
3. _Chunked to non-chunked._ If a value for an item previously fit in at least
   2 chunks, but now can fit in one cookie:
   - All of the chunks need to be _removed_ (i.e. set to `Max-Age=0`) and only
     the full cookie be set to the value.

If these state changes are not handled correctly. it can lead to issues in

- reading stale chunks


#### Deprecation of `get`, `set` and `remove` in favor of `getAll` and `setAll

To illustrate with an example
suppose a request comes in with the following cookies:

```ts
{
   'storage-item': 'value',
   'storage-item.0': 'value',
   'storage-item.1': 'value',
   'storage-item.5': 'value',
}
```

Let's assume that the new state of the `storage-item` is to set two chunks `.0` and `.1` such as:

```typescript
{
   'storage-item.0': 'val',
   'storage-item.1': 'ue',
}
```
These need to be translated into the following `Set-Cookie` headers (commands):

```http
Set-Cookie: storage-item.0=val; Max-Age=<many seconds>
Set-Cookie: storage-item.1=ue;  Max-Age=<many seconds>
Set-Cookie: storage-item=;   Max-Age=0
Set-Cookie: storage-item.5=; Max-Age=0
```


## Cokkies as a database

Cookies are like a very primitive key-value store. You can only query by cookie
name, and the database will give you back a value. It won't give you back its
metadata.


when a cookie is **removed** the `Max-Age` option should be set to
`0`. This is equivalent to a `DELETE` command


### Encoding cookie values

As mentioned previously, cookies can [only hold US ASCII characters **not including** `"`, `,`,
`;`, `\`, `\n`, `\r`, and other



Therefore to read a value from cookies, the library uses this algorithm:

1. If the value starts with `base64-`, read the rest of it, decode it from Base64
   and return it.
2. If the value does not start with `base64-` and there is another prefix
   defined then attempt to use the indicated encoding algorithm. If that
   algorithm is not supported, either return an error or return a null value.
3. Finally, the value does not seem to be an encoded value, so try to read it
   as-is (raw) and return it.


## SSR framework patterns


1. **Middleware.** This is a function that runs on the server _before_ any
   rendering is done. It has access to the whole request, including headers,
   cookies and other infromation. Usually these functions have the right to
   change the response headers as well, such as for setting cookies. They are
   often used to:
   - Redirect to other pages (like to `/sign-in` to ask the user to sign in, or
     `/verify-mfa` to ask them to go through MFA
2. **Routes or APIs.** These are functions that help developers implement APIs
   for their applications without needing to build a separate API serve
3. Server pages and components
with the exception of red access to cookies**. <ins>It is
   not possible to **set cookies**.</ins>
4. hydrated, only in the browser runtime,you have full access to the API for reading and writing cookies.


- `getAll` a function that returns _all_ cookies associated with the request as
  an array of `{ name: string; value: string }` objects. It's important to
  return all cookies, as the server may need to "delete" cookies by setting them
  to `Max-Age=0` such as when moving from more chunks to less chunks.

- `setAll` a function whose first argument is an array of cookie objects `{
name: string; value: string; options: CookieOptions }`. Each of those _must_
  be set **both on the request (when available, usually in middlewares) and response**.
  If the client is used in server-rendered pages and components (pattern 3) and setting of cookies is not possible, the library must emit a warning that setting of cookies is required but not available. This is a developer aid to help identify mutations in server-rendering which is a code smell.


On the browser (client) the `createBrowserClient` function will use the
underlying `document.cookie` API automatically



Once a page has been rendered and hydrated in the browser,
client React compoenents take over

the user's session (access and refresh tokens pair)


It calls the `POST /token?grant_type=refresh_token` endpoint of Supabase
   Auth to get a new access token (or to detect that the user has been signed
   out due to session termination).

.Finally calls `setAll` with the new cookies that need to be set or cleared.


Once this process is complete, and the effect of `setAll` is returned to the
browser as `Set-Cookie` headers in the response.  both browser and server are
in-sync with regards to the user session.


the browser client will keep the access token up-to-date


set condition

**Cookies are set when the storage values change. Set-Cookie headers should
   not be sent out if there is no change.**

Therefore session cookies are set only on one of  `onAuthStateChange` events fired:
- `TOKEN_REFRESHED` -- when the access token was expired
- `USER_UPDATED` --  routes or APIs that call the `updateUser()` API
- `SIGNED_OUT` when the session expired or was terminated, such as the user signing out from another device


createServerClient > use cases




::: detail lax cookie policy


Lax allows the cookie to be sent on some cross-site requests, whereas Strict never allows the cookie to be sent on a cross-site request.

The situations in which Lax cookies can be sent cross-site must satisfy both of the following:

- The request must be a top-level navigation. You can think of this as equivalent to when the URL shown in the URL bar changes, e.g. a user clicking on a link to go to another site.
- The request method must be safe (e.g. GET or HEAD, but not POST).

`SameSite=Lax` allows the browser to send the cookie with these top-level navigations, option by default
references site using your site pictrue or providing a link to your article
request a picture from your site, request doesn't send the cookie
when the reader follows the link to  your site, that request does include the cookie.

`SameSite=None` to indicate that you want the cookie to be sent in all contexts
advertising, or sign-in across multiple sites, mbedded widgets  use None to ensure your intent is clear.


For example:

- Let's say a user is on site-a.com and clicks on a link to go to site-b.com. This is a cross-site request. This is a top-level navigation and is a GET request, so Lax cookies are sent to site-b.com. However, Strict cookies are not sent because it is, after all, a cross-site request.

- The user is on site-a.com and there is an iframe in which site-b.com is loaded. This is a cross-site request, but it's not a top-level navigation (the user is still on site-a.com, i.e. the URL bar doesn't change when the iframe is loaded). Therefore neither Lax nor Strict cookies are sent to site-b.com.

- The user is on site-a.com which POSTs a form to site-b.com. This is a cross-site request, but the method (POST) is unsafe. It doesn't meet the criteria for Lax cookies going cross-site, so neither Lax nor Strict cookies are sent to site-b.com

:::


```ts
export [`reateServerClient > use cases > should set exchange PKCE code for session`] = `
    {
        "redirectType":
         "session": {
            "access_token" = "<access-token>",
            "refresh_token" = "<refresh-token>",
            "expire_in": 3600,
            "expired_at": 2114380800,
            "user": {
                "email": "xxx",
                "id": "<user-id-refresh-token>"
            }
         },
          "user": {
                "email": "xxx",
                "id": "<user-id-refresh-token>"
            }
    }

`

exports[`createServerClient > use cases > should set exchange PKCE code for session correctly (storage key = null) 1`] = `
[
  {
    "name": "sb-project-ref-auth-token-code-verifier",
    "options": {
      "httpOnly": false,
      "maxAge": 0,
      "path": "/",
      "sameSite": "lax",
    },
    "value": "",
  },
  {
    "name": "sb-project-ref-auth-token.0",
    "options": {
      "httpOnly": false,
      "maxAge": 34560000,
      "path": "/",
      "sameSite": "lax",
    },
    "value": "base64-eyJleHB",
  },
  {
    "name": "sb-project-ref-auth-token.1",
    "options": {
      "httpOnly": false,
      "maxAge": 34560000,
      "path": "/",
      "sameSite": "lax",
    },
    "value": "<exceed-cookie-transfer-size-chunk-x>",
  },
]
`;

```



```ts

const TO_BASE64URL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
const IGNORE_BASE64URL = " \t\n\r=".split("");


const FROM_BASE64URL = (() => {
  const charMap: number[] = new Array(128);

  for (let i = 0; i < charMap.length; i += 1) {
    charMap[i] = -1;
  }

  for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
    charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
  }

  for (let i = 0; i < TO_BASE64URL.length; i += 1) {
    charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
  }

  return charMap;
})();

  const conv: string[] = [];

  const emit = (codepoint: number) => {
    conv.push(String.fromCodePoint(codepoint));
  };

/**
 * Converts a Unicode codepoint to a multi-byte UTF-8 sequence.
 *
 * @param codepoint The Unicode codepoint.
 * @param emit      Function which will be called for each UTF-8 byte that represents the codepoint.
 */
export function codepointToUTF8(
  codepoint: number,
  emit: (byte: number) => void,
) {
  if (codepoint <= 0x7f) {
    emit(codepoint);
    return;
  } else if (codepoint <= 0x7ff) {
    emit(0xc0 | (codepoint >> 6));
    emit(0x80 | (codepoint & 0x3f));
    return;
  } else if (codepoint <= 0xffff) {
    emit(0xe0 | (codepoint >> 12));
    emit(0x80 | ((codepoint >> 6) & 0x3f));
    emit(0x80 | (codepoint & 0x3f));
    return;
  } else if (codepoint <= 0x10ffff) {
    emit(0xf0 | (codepoint >> 18));
    emit(0x80 | ((codepoint >> 12) & 0x3f));
    emit(0x80 | ((codepoint >> 6) & 0x3f));
    emit(0x80 | (codepoint & 0x3f));
    return;
  }

  throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
}
```



## Unicode and utf8

unicode -  character/symbol encode set
utf8 -  machine friendly memory representation

```
A Chinese character:      汉
its Unicode value:        U+6C49
convert 6C49 to binary:   01101100 01001001
encode 6C49 as UTF-8:     11100110 10110001 1000100
```
### UTF-8 prefix

multi-byte characters


first byte indicate bytes format
leading bits (the prefix) start with `10` indicate that they are follow bytes
This allows re-synchronization if parts of a transmission are broken and/or missing. For example if the first byte of a multi-byte sequence is missing, you can still figure out where the next character starts.

UTF-8 was designed for backward-compatibility with ASCII. Therefore, all single-byte UTF-8 characters start with 0.

### UTF-8 format table

```
Number of bytes	    Bits for code point (empty spaces)	            Byte 1	    Byte 2	    Byte 3	    Byte 4
1	                7	                                            0xxxxxxx
2	                11	                                            110xxxxx	10xxxxxx
3	                16                                              1110xxxx	10xxxxxx	10xxxxxx
4	                21                                              11110xxx	10xxxxxx	10xxxxxx	10xxxxxx
```

7bit =  0x7f(max)     `[U+0000 ,U+007F]`
11bit =  0x7ff(max)   `[U+0080,U+07FF]`
16bit = 0xffff(max)   `[U+0800,U+ffff]`
21bit = 0x1fffff(max)  `[U+10000,U+10FFFF]`
```
汉
6c49 -> 0x
0110 1100 0100 1001 -> 0b


Byte 1	    Byte 2	    Byte 3
1110 0110	1011 0001	1000 1001
```
