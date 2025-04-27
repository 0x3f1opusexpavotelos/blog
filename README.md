
## Tech Stack



  <!-- TEMPLATE FOR NEW ROW -->
  <!-- START ROW


  <tr>
    <td></td>
    <td><a href="" target="_blank" rel="noopener noreferrer"></a></td>
    <td><a href="" target="_blank" rel="noopener noreferrer"></a></td>
    <td><a href="" target="_blank" rel="noopener noreferrer"></a></td>
  </tr>
END ROW -->
<!-- notranslate -->
<!-- /notranslate -->

<!-- TEMPLATE FOR SUB HEADER -->

<!-- START HEADER
    <th colspan="4"> Current </th>
END HEDAER -->

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Version</th>
    <th>Status</th>
    <th >Branch</th>
    <th colspan="3">Tech Stack</th>
  </tr>
  <!-- notranslate -->
  <tr>
    <th> <1.0.0 </th>
    <th>prelease</th>
    <th>v0-mkdocs</th>
    <th>mkdocs</th>
  </tr>
  <!-- /notranslate -->
  <th colspan="6" style="text-align: center"> Current, stable</th>
  <!-- notranslate -->
  <tr>
    <td>^1.0.0</td>
    <td> active </td>
    <td> v1-vitepress | vitepres-rc</td>
    <td> vitepress</td>
  </tr>
  <!-- /notranslate -->

  <th colspan="6" style="text-align: center">⚡️ Next, breaking change</th>
  <!-- notranslate -->
    <tr>
    <td>^2.0.0</td>
    <td> wip </td>
    <td> with-astro</td>
    <td> island arch, max and more </td>
    <td> server pre-render, client-side hydration</td>
  </tr>
  <!-- /notranslate -->
</table>


> [!NOTE]
> You are viewing the **feat/with-astro branch**,
>
> For better CMS intergration experience, This blog has mirgarted to astro powered hybrid render solution (server-side pre-rendering, client-side hydration)
>
> legacy code can be found at  [vitepress-rc branch](https://github.com/0x3f1opusexpavotelos/blog/tree/vitepress-rc).


## ✨ Features Checklist

- [x] Homepage

  - [x] Blog post summaries or excerpts
  - [x] Navigation menu

- [ ] Post Details Page

  - [x] Full blog post content
  - [x] Author information
  - [x] Post date and time
  - [x] Categories
  - [ ] Tags

- [ ] Post Management

  - [x] Create, edit, delete, and publish posts.
  - [ ] Draft and schedule posts.
  - [x] Categories for organizing content.
  - [ ] Tags for organizing content.
  - [x] Post previews before publishing.

- [ ] Comments

  - [ ] Enable/disable comments on posts.
  - [ ] Comment moderation (approve, reject, or delete comments).
  - [ ] Nested comments or replies.
  - [ ] User authentication for commenting.
  - [ ] Spam filtering.
  - [ ] Highlight top comments, making discussions more engaging.

- [ ] User Management

  - [x] User registration and login.
  - [x] User roles (admin, user, guest, subscriber).
  - [x] User profiles and avatars.
  - [x] User permissions and access control.

- [ ] Search Functionality

  - [x] Search bar for finding posts.
  - [ ] Filters and sorting options (by date, popularity, etc.).

- [ ] Content Display

  - [x] Responsive design for different devices.
  - [x] Featured images or media for posts.
  - [ ] Related posts or recommended reading.
  - [x] Pagination or infinite scroll.
  - [ ] Display a list of popular tags to help users discover content.

  ## Profile Management

  - [x] **Profile Editing**  
         Allow users to update their basic information, including:

    - [x] Display name
    - [x] Email address (with email verification upon change)
    - [x] Bio and social links

  - [ ] **Profile Picture Upload**  
         Enable users to upload or update their profile pictures, ensuring:

    - [x] Default avatars if no picture is uploaded

  - [x] **Public Profile Viewing**  
      - [x] Allow public access to user profiles through a dedicated username-based route.

  - [ ] **Account Settings**  
         Provide options for managing account preferences, such as:

    - [ ] Privacy settings to control visibility of profile elements

    - [ ] Linked accounts for social media or external login providers

  - [ ] **Password and Security**  
         Include options for updating passwords and enhancing account security:

    - [x] Forgot password functionality to reset the password via email or phone verification
    - [x] Reset password feature allowing users to set a new password after identity verification
    - [x] hCaptcha protection on the Forgot Password page to prevent automated abuse
    - [ ] Two-factor authentication setup
    - [ ] Option to view recent account activity and log out from other sessions

  - [x] **Data Management**  
         Allow users to manage their data in compliance with privacy standards:
    - [x] Download account data as a JSON file
    - [x] Delete account (permanent deletion with confirmation)

## SEO Features

### Core SEO Features

- [x] **Meta Tags**

  - [x] Implement dynamic meta titles for each page/post.
  - [x] Create unique meta descriptions for each page/post.
  - [x] Optimize title tags for length and keyword relevance.
  - [x] Implement meta robots tags to control indexation.

- [x] **Open Graph & Twitter Cards**

  - [x] Ensure Open Graph tags are set for all pages.
  - [x] Set up Twitter card metadata for sharing.
  - [x] Customize images for Open Graph and Twitter cards.
  - [x] Validate Open Graph and Twitter card implementation using debugging tools.

- [x] **Alt Text for Images**

  - [x] Add descriptive `alt` attributes to all images.
  - [x] Use relevant keywords in alt text without keyword stuffing.
  - [x] Review and update alt text for existing images.

- [ ] **Structured Data**

  - [ ] Implement schema markup for articles, authors, and any relevant content.
  - [ ] Use JSON-LD for structured data implementation.
  - [ ] Test structured data with Google’s Rich Results Test tool.
  - [ ] Implement schema for breadcrumbs for better navigation.

- [x] **Sitemap and Robots.txt**

  - [x] Create and maintain a `sitemap.xml` file.
  - [x] Add a `robots.txt` file to control crawling.
  - [x] Ensure the sitemap includes all important pages and is updated regularly.
  - [x] Submit the sitemap to Google Search Console.

- [ ] **Canonical Tags**

  - [ ] Implement canonical tags to avoid duplicate content issues.
  - [ ] Audit canonical tags to ensure they point to the correct URLs.
  - [ ] Review canonical tag usage in pagination and archives.

### Performance Optimization

- [ ] **Image Optimization**

  - [ ] Use responsive image formats (e.g., WebP).
  - [ ] Ensure lazy loading is enabled for images.
  - [ ] Compress images without losing quality.
  - [ ] Implement image CDNs for faster delivery.

- [x] **Mobile Optimization**

  - [x] Test responsiveness on various devices.
  - [x] Ensure fast loading times on mobile.
  - [x] Use mobile-friendly navigation.
  - [x] Optimize touch targets for mobile users.

- [x] **Caching**

  - [x] Implement browser caching for static resources.
  - [x] Use a content delivery network (CDN) for faster load times.
  - [x] Optimize server response time.

### Content Quality

- [x] **Content Freshness**

  - [x] Regularly update old blog posts with new information.
  - [x] Repurpose existing content into new formats (e.g., video, infographics).
  - [x] Identify and remove outdated content.

- [ ] **User Engagement**

  - [ ] Add internal linking to related posts.
  - [ ] Encourage comments and discussions.
  - [ ] Use call-to-action (CTA) buttons effectively.
  - [ ] Conduct regular surveys to understand user interests.

### Monitoring and Analytics

- [ ] **Analytics Integration**

  - [ ] Set up Google Analytics to track user behavior.
  - [ ] Implement Google Search Console for indexing and performance insights.
  - [ ] Monitor key performance indicators (KPIs) regularly.

- [ ] **Broken Link Check**

  - [ ] Use tools to regularly check for and fix broken links.
  - [x] Implement a 404 error page with useful navigation options.
  - [x] Redirect broken links to relevant pages.

### Advanced SEO Features

- [ ] **Social Signals**

  - [ ] Add social sharing buttons to posts.
  - [ ] Encourage sharing through social media.
  - [ ] Monitor social media engagement metrics.
  - [ ] Create shareable content (e.g., infographics, quotes).

### Accessibility

- [x] **Semantic HTML**

  - [x] Use semantic elements (like `<article>`, `<header>`, etc.) for better structure.
  - [x] Ensure proper heading structure (H1, H2, H3).
  - [x] Implement ARIA roles where necessary.

- [ ] **Keyboard Navigation**

  - [x] Ensure the site is navigable via keyboard for accessibility.
  - [x] Test focus states for interactive elements.
  - [ ] Provide skip links to improve navigation for screen reader users.

### Legal and Compliance

- [ ] **GDPR Compliance**

  - [x] Include a privacy policy and cookie consent banner.
  - [ ] Implement user data protection measures.
  - [x] Allow users to request data deletion. (Available via dashboard)

- [ ] **Accessibility Compliance**

  - [ ] Ensure compliance with WCAG (Web Content Accessibility Guidelines).
  - [ ] Conduct regular accessibility audits.
  - [ ] Provide accessibility resources and contact information for support.

### Additional SEO Features

- [x] **User Experience (UX)**

  - [x] Conduct user testing to identify pain points in navigation.
  - [x] Analyze user behavior through heatmaps and session recordings.
  - [x] Optimize layout and design for better user engagement.

- [ ] **Voice Search Optimization**

  - [ ] Optimize content for voice search queries (natural language, questions).
  - [ ] Use structured data to enhance voice search results.
  - [ ] Consider featured snippets and local search results for voice queries.

- [ ] **Video SEO**

  - [ ] Optimize video titles, descriptions, and tags for search.
  - [ ] Create video sitemaps to index video content effectively.
  - [ ] Use closed captions and transcripts for accessibility and SEO.

- [ ] **Content Diversification**

  - [ ] Explore various content formats (podcasts, webinars, etc.).
  - [ ] Create interactive content (quizzes, polls) to boost engagement.
  - [ ] Implement user-generated content strategies (reviews, testimonials).

- [ ] **A/B Testing**

  - [ ] Conduct A/B tests on landing pages to improve conversion rates.
  - [ ] Test different headlines, images, and calls-to-action.
  - [ ] Analyze results and make data-driven decisions for future optimizations.

- [ ] **Competitor Analysis**

  - [ ] Regularly analyze competitors’ SEO strategies and performance.
  - [ ] Identify content gaps and opportunities in your niche.
  - [ ] Monitor competitors’ backlink profiles for potential link-building opportunities.

- [ ] **Link Building**

  - [ ] Develop a strategy for acquiring high-quality backlinks.
  - [ ] Conduct outreach to relevant sites for guest posting.
  - [ ] Monitor backlinks regularly for quality and relevance.

- [ ] **Content Strategy**

  - [ ] Develop a content calendar to ensure consistent publishing.
  - [ ] Focus on pillar content and topic clusters for better organization.
  - [ ] Identify seasonal content opportunities to capitalize on trends.

- [ ] **Regular Audits**

  - [ ] Schedule regular SEO audits to identify areas for improvement.
  - [ ] Analyze site health, performance, and compliance with best practices.
  - [ ] Review content performance to make informed updates.

- [ ] **User Feedback and Adaptation**

  - [ ] Implement feedback loops to gather user insights and adjust strategies.
  - [ ] Use surveys and polls to understand user preferences and content interests.

### Advanced Features

- [ ] Social Media Integration
  - [ ] Social sharing buttons.
  - [ ] Social media feeds or widgets.
  - [ ] Auto-posting to social media platforms.
- [ ] Monetization
  - [ ] Ad placement and management.
  - [ ] Affiliate links and product reviews.
  - [ ] Subscription or membership models.
  - [ ] E-commerce integration (for selling products or services).
- [ ] Content Management
  - [ ] Media library for managing images, videos, and files.
  - [ ] Content import/export tools.
  - [ ] WYSIWYG or markdown editor for content creation.
  - [ ] Custom post types (e.g., events, reviews).
- [ ] User Interaction

  - [ ] Contact forms and feedback mechanisms.
  - [ ] Quizzes, interactive infographics, surveys or polls
  - [ ] Newsletter subscription.
  - [ ] Users can bookmark or save posts for later reading

- [ ] Security Features
  - [ ] SSL/TLS encryption.
  - [ ] Two-factor authentication.
  - [ ] Backup blog content and settings.
  - [ ] User activity logs.
- [ ] Performance Optimization
  - [ ] Caching mechanisms.
  - [ ] Content Delivery Network (CDN) integration.
  - [ ] Lazy loading for images and videos.
- [ ] Accessibility Features
  - [ ] Alt text for images.
  - [ ] Keyboard navigation support.
  - [ ] Screen reader compatibility.
- [ ] Localization and Internationalization
  - [x] Multi-language support.
  - [ ] Regional settings (date formats, currency).
  - [ ] Auto-translate or integrate with translation services like Google Translate.
- [ ] Notifications
  - [ ] Email notifications for new posts or comments.
  - [ ] Push notifications for updates.
- [ ] Legal and Compliance
  - [ ] Privacy policy and terms of service.
  - [ ] GDPR compliance features.
  - [x] Cookie consent.
  - [ ] Analytics and Reporting
  - [ ] Track page views, post views, and user engagement

## Admin Features

- [ ] Dashboard
  - [ ] Overview of post statistics, comments, and user activity
- [ ] User Roles and Permissions
  - [ ] Manage user roles and permissions
- [ ] Content Moderation
  - [ ] Review and manage content before publication
- [ ] Customizable Themes
  - [ ] Choose or customize blog themes and layouts
- [ ] Advanced Comment Management
  - [ ] Comment moderation queue
  - [ ] Spam filtering

### Community Features

- [ ] User-generated Content
  - [ ] Guest posts.
  - [x] User profiles with bios and links.
- [ ] Forums or Discussion Boards
  - [ ] Threads and topics for community discussions.
  - [ ] User reputation or ranking system.



- **[Mono repo]** - 
- **[Multi-Framework]** - vue, react
- ⚡️ **[Fast][Vite]** - instant reloading powered by [Vite]


## Project Setup


```bash
#  keep only the code from feat/with-astro but still link main histories

git merge --allow-unrelated-histories -s ours origin/main
```


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



## t3 stack Jamstack

sentry
google analytics
posthog
datadog
upstash

Dockerfile
.dockerignore
Build Docker image
Run Docker container
```bash
docker build -t opus/portfolio:latest .
kubectl apply -f protfolio.yaml
kubectl get pods
kubectl get services
```

clusterIP - inside cluster
NodePort - use for dev
LoadBalancer - external use
ExternalName - redirects to CNAME




brute force attack

query executor
query builder
raw query template
```ts
const result = await prisma.$queryRaw`SELECT * FROM User`;
```


```ts
await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`)
```



ryan dahl


Serverless Data Platform upstash



## oauth flow

hit the authorize endpoint with credentials



pnpm create vite theme --template react-ts

font icon
web component  as icon
svg icon loader
virtual module
svg compomnent

web component essential




Composable components for building forms.
A `<FormField />` component for building controlled form fields.



[postgres error code](https://www.postgresql.org/docs/current/errcodes-appendix.html)


## analytics


[plausible](https://plausible.io/)

[sentry]()

[posthog]()

[datadog]()

[onedollarstat]()

