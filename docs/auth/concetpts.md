---
title: Auth concepts
excerpt: 'About authenticating with PKCE flow.'
---
## about user
tied to Personally Identifiable Information (PII), such as an email address, a phone number, or a third-party identity.
They can use these identities to sign back into their account after signing out.


## user object

The user object stores all the information related to a user in your application.
user object can be retrieved using one of these methods:


- supabase.auth.getUser()
- Retrieve a user object as an admin using supabase.auth.admin.getUserById()


A user can sign in with one of the following methods:

Password-based method (with email or phone)
Passwordless method (with email or phone)
OAuth
SAML SSO

An identity describes the authentication method that a user can use to sign in. A user can have multiple identities. These are the types of identities supported:

- Email
- Phone
- OAuth
- SAML


The user object contains the following attributes:
email
email_confirmed_at
phone
phone_confirmed_at
last_sign_in_at



## session
A session is created when a user signs in.
can have number of active sessions on as many devices.


A session is represented by the  Auth access token in the form of a JWT,
and a refresh token which is a unique string.

Access tokens are designed to be short lived
while refresh tokens never expire but can only be used once
You can exchange a refresh token only once to get a new access and refresh token pair(This process is called refreshing the session.)

### session termination

A session terminates, depending on configuration, when:

The user clicks sign out.
The user changes their password or performs a security sensitive action.
It times out due to inactivity.
It reaches its maximum lifetime.
A user signs in on another device.


Every access token contains a session_id claim,


### initiating a session

The session is stored in the `auth.sessions` table,
and your app should receive the access and refresh tokens.

There are two flows for initiating a session and receiving the tokens:

- Implicit flow
- PKCE flow

##  PKCE code  flow
PKCE Oauth protocol that enables secure exchange of refresh and access tokens between an application and the authorization server

PKCE(Proof Key for Code Exchange) is an extension to the OAuth protocol that
enables secure exchange of refresh and access tokens between an application (web app, single-page app or mobile app) and the authorization server

client-only and server-side auth.


### How it works

After a successful verification, the user is redirected to your app with a URL that looks like this:

```
https://yourapp.com/...?code=<...>
```

The `code` parameter is commonly known as the Auth Code and can be exchanged for an access token by calling `exchangeCodeForSession(code)`.


For security purposes, the code has a validity of 5 minutes and
## implicit flow


### How it works

After a successful signin, the user is redirected to your app with a URL that looks like this:

```
https://yourapp.com/...#access_token=<...>&refresh_token=<...>&...
```

The client libraries:

- Detect this type of URL
- Extract the access token, refresh token,
- Persist this info to local storage for further use by the library and your app


## Limitations

the implicit flow only works on the client. Web browsers do not send the URL fragment to the server by design. This is a security feature:

`GET` requests and their full URLs are often logged. This approach avoids leaking credentials in  access logs.

If you wish to obtain the access token and refresh token on a server, use the [PKCE flow](/docs/auth/sessions).
