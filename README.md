## Project Setup


```bash

npm i -D prettier prettier-plugin-astro

```

```bash
# deal with undici does not respect proxy settings problem
# giget --> node-fetch-native --> node --> undici
npx giget@latest gh:withastro/astro/examples/basics astro-blog
```
```tsx
<Counter initialCount client:load >
  <div slot="top">top</div>
  <div slot="button ">top</div>
</Counter>
```

## SSR
- CSR: client-side rendering
- SSR: server-side rendering
- SSG: static site generation
- hybrid: server-side prerending, client-side hydration
- ISR: incremental static regeneration


adapter for server runtime

## Content layer and content collection




cms


frontmatter validation


- newsletter
- blog
- author

query content collection and return content entry


`src/content/config.ts` 


content format .md, .mdx
data format .json, .yaml,

exclude by prefix with `_`

api
db

## Image optimization

## source for original image file

convert to 
- web-friendly image format webp


- src
for remote image, provide full url

for image located in project `src/` use the file path relative to the `src/` directory


for image  located in `public/` directory , use the URL path relative to the `public` directory


remote image original format could not be inferred 


- quality

 compress image size, quality

- size

content-aware image cropping

width and height or `aspectRatio` to crop the image to exact size

[sharp]()
[squoosh]()

## DATABASE integration 

`/[org]/[repo]/tree/[branch]/[...file]`
source of frustration or easy to integrates into develop workflow


column constraint: not null, default value unique

### loading image in css sucks

> fetch html -> fetch css -> fetch image
> etch html fetch image



### using compressed image format like webp

```bash
cwebp -q 50 images/flower1.jpg -o images/flower1.webp

`for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
```
[download webp util](https://developers.google.com/speed/webp/download)



### optimize screen size and resolution


```
/_next/image/w=&q=

```

serve sized image for each device

which size of image to download

not yet know the size of the image on the page,

it select image that is same size or thelarger than the viewport

size property allow you to tell image smaller than the viewport

full width on mobile device, 2-column layout tablets, 3-column layout on desktop layout

```html
  <img 
    loading="lazy"
    srcset=""
    sizes="(max-width: 768px 100vw), (max-width: 1200px) 50vw, 33vw"
    decoding="async"
    style="aspect-ratio: 16/9;"
    src="/image.png"
  />
```




layout shift: sizes hint

lazy-load: image are only loaded when they eneter the viewport

```tsx
<div className="relative h-60 overflow-hidden">
  <Image
    fill
    src={}
    sizes="(max-width: 768px 100vw), (max-width: 1200px) 50vw, 33vw"
    className="object-cover w-full h-full"
    alt=""
  />
</div>
```



### image storage solution
[managing, transforming and delivering optimized images with cloudinary](https://cloudinary.com/pricing)

[s3 with management overhead](https://aws.amazon.com/s3/)
[digital ocean spaces with]

[cyber Buddha, cloudfare, Free tier](https://developers.cloudflare.com/r2/pricing/)

[optimize for china mainland](https://www.aliyun.com/product/oss)

[lib maybe a solution uploadthing](https://uploadthing.com/)

## Font optimization

self-hosting web font

loading/import local font 

loading fonts from font delivery service

```css
/** @legacy import url base string without the function wrapper */
@import "https://www.nerdfonts.com/assets/css/webfont.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/*  static local font should located in  /public/assets/ */
/**  fragment url */
/**  relative url  */
```

font face
```css
@font-face {
  font-family: 'Nerd Font';
  src: url("/fonts/NerdFont.woff2") format("woff2");
  font-weight: 200 400 600 800;
  font-display: swap;
  unicode-range: U+ec19,U+ea97,U+f00e6,U+e7ee;
}

```

```json
    "typography": {
      "fontFamilies": [{
        "fontFamily": "Poppins",
        "name": "Poppins",
        "slug": "poppins",
        "fontFace": [{
          "fontFamily": "Poppins",
          "fontWeight": 400,
          "fontStyle": "normal",
          "src": ["file:./assets/fonts/Poppins-Regular.woff2"]
        }]
      }]
    }
```
```css
@layer theme {
  :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
  }
}

```





```bash
import localFont from 'next/font/local'
```


[fonts](https://fontsource.org/)

```bash
npm install @fontsource/cabin @fontsource/poppins

```

```css
@layer base {
  body {
    font-family: 'Poppins', sans-serif;
  }
}
```



```ts
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type import('tailwindcss').Config */
module.exports = {
  theme: {
    extens: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Cabin', ...defaultTheme.fontFamily.serif]
      }
    }
  }
}

```


## CMS intergration

storyblock

ghost
strapi
payload
hugo
buttercms 
contentful 





[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



Data fetching, caching and revalidating



## routing


### file-based routing

default routing with battle proof

layout.tsx
page.tsx
error.tsx
loading.tsx


### dynamic routing (don't know know ahead of on-request time)


define dynamic route parameter in filename
to match any level depth, rest parameter






with static generation
```tsx
export function getStaticProps() {
  return [
    {params: {post: 'effective-git'}},
    {params: {post: 'effective-go'}},
    {params: {post: 'effective-larvel'}},
  ]
}

```



direct access DB
access token and api keys exposed to client

not-found, error, loading page



## Endpoints

Astro global 

static file endpoints

Server Endpoints (API Routes)








## script optimization


load third-party script


analytics

advertisement

chatbot 

map

```tsx
"use client "
import Script from 'next/script'

export default function Page() {


  return (
    <>
    <Script
      id="google-maps"
      src="https://maps.googleapis.com/maps/api/js"
      onLoad={() => {
          new google.maps.Map(mapRef.current,{
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          })
      }}/>
    </>
  )
}


```


```tsx [chatbot]
import Script from 'next/script'

export default function Chatbot() {
  return (
    <Script 
      src="/chatbot.js" 
      strategy="lazyOnload"
      onLoad={ () => initializeChatbot()}
    >
    </Script>
  )
}

```



## SEO metadata

config-based metadata

file-based metadata

`<meta>` tag title, description, open graph, twitter card, favicon attribute

`<link>` tag



```tsx
export const metadata:Metadata = {
  // default to http://localhost:${process.env.PORT || 3000}
  metadataBase: ""
}
```

favicon
metadataBase
robots
openGraph
twitter
sitemap



react-social

`opengraph-image` and `twitter-image`

image appear on social networks and messaging apps
messaging apps when a user shares a link to your site 



```tsx
const handleFileUpload = () => {
  const input  = document.getElementById('input')
  input.type = 'file'
  input.accept = 'image/*'

  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]

    if(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64Image = e.target?.result as string
        setUploadedFiles([...uploadedFiles, file])
        setImageDataList([...imageDataList, base64Image])
      };
      reader.readAsDataURL(file)
    }
  }

  input.click()
}


const handlePaste = async (e.React.ClipboardEvent) => {
  const items = e.clipboardData?.items

  if (!items) {
    return
  }

  for (const item of items) {
    if (item.type.startsWith('image/')) {
      e.preventDefault()

      const file = item.getAsFile()

      if(file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const base64Image = e.target?.result as string
          setUploadedFiles([...uploadedFiles, file])
          setImageDataList([...imageDataList, base64Image])
        }
        reader.readAsDataURL(file)
      }

      break
    }
  }
}

```



 gray scales 
 slate
 zinc
 neutral
 stone



```tsx

genEntry
getCollection

export async function getStaticProps() {
  
  return {
    data: ["containing the page's slice of data that "]
    start:0
    end:5
    size: 6
    total: 10
    currentPage: 1
    lastPage: 2
    // link to next page and prev page in the set
    url: {current: "/", next: '/next', prev: "/prev"}
  }
}

```




```index.html
<!-- wp:post-title  -->
<!-- wp:post-content  -->

```

```json


{
  "settings": {
    "appearance": {
      "contentSize": "800px",
      "wideSize": "1100px"
    },
    "typography": {
      "fontFamilies": [{
        "fontFamily": "Poppins",
        "name": "Poppins",
        "slug": "poppins",
        "fontFace": [{
          "fontFamily": "Poppins",
          "fontWeight": 400,
          "fontStyle": "normal",
          "src": ["file:./assets/fonts/Poppins-Regular.woff2"]
        }]
      }]
    },
    "color": {
      "palette": [
        {
          "color": "#fff",
          "name": "Starlight",
          "slug": "starlight"
        },
        {
          "color": "#000",
          "name": "Black hole",
          "slug": "black-hole"
        },
        {
          "color": "#0c0720",
          "name": "Event horizon",
          "slug": "event-horizon"
        },
        {
          "color": "#ff7e33",
          "name": "Blast off",
          "slug": "blast-off"
        },

      ]
    }
  }
}
```


## env management

```env
VITE_
VITE_PUBLIC
```

```ts
import {loadEnv} from 'vite'
```




```ts
// Astro global object

Astro global URL {
  href: 'http://localhost:4321/',
  origin: 'http://localhost:4321',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:4321',
  hostname: 'localhost',
  port: '4321',
  pathname: '/',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
```




```astro



// filter properties by search filter



---
if(bedrooms > 0 && !isNaN( parseInt(bedrooms) )) {
  filteredProperties = filteredProperties.filter(property => {
    return property.details.bedrooms <= parseInt(bedrooms)
  })
}
if(minPrice > 0 && !isNaN( parseInt(minPrice) )) {
  filteredProperties = filteredProperties.filter(property => {
    return property.details.minPrice <= parseInt(minPrice)
  })
}
if(maxPrice > 0 && !isNaN( parseInt(maxPrice) )) {
  filteredProperties = filteredProperties.filter(property => {
    return property.details.price <= parseInt(maxPrice)
  })
}

const limit = import.meta.env.PAGE_SIZE || 10
const totalPage = Math.ceil(filteredProperties.length / limit)

const page = page ? isNaN(parseInt(page)) ? 1 : parseInt(page) : 1
const offset = (page - 1) * limit
filteredProperties = filteredProperties.slice(offset, offset + limit)

---

<form method="GET">
  <fieldset class:list={["grid grid-cols-1 sm:grid-cols2 md:grid-cols-4", "gap-2 pb-2"]}>


  </fieldset>

</form>

<div>
  <a
    href={
          `?${searchParamsStr 
        ? `${searchParamsStr}&page=${page + 1}`
        : `page={page + 1}`
      }
    `}
  >
    next
  </a>

</div>

```
