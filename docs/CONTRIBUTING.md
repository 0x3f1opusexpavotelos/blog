# Contributing to Supabase docs

## General principles

Docs should be helpful, quick to read, and easy to understand. We have an audience of global readers who speak different native languages.

- Avoid using idioms,  such as `piece of cake`. These phrases are often specific to a region or culture.
- Refer to the reader as `you`. Don't use `we` to refer to the reader. Use `we` only to refer to the docs team.

## Document types

 docs contain 4 types of documents. Before you start writing, think about what type of doc you need.

### Explainers

- A description of _what_ a feature is
- Some reasons _why_ it is useful
- Some examples of _when_ to use it
- A high-level explanation of _how_ it works

They shouldn't include:

- Instructions on how to use it

### Guides

Guides contain mostly procedures.


### Reference

References are factual and to the point. Think of dictionary entries.

They should include:

- Function parameters
- Return types


They shouldn't include:

- Explanations of the context for a feature
- Examples of use cases
- Multi-step instructions


## Repo organization


identify a federated or reference doc  because it uses a Next.js dynamic route (for example, `[[...slug]].tsx`). Look for the spec file import or the repo definition to find the content locati


## Guide structure


Adding a new guide requires:

- YAML frontmatter
- A navigation entry (in a separate file)
The navigation is defined in [`NavigationMenu.constants.ts`](/docs/components/Navigation/NavigationMenu/NavigationMenu.constants.ts).
Add an entry with the `name`, `url`, and (optional) `icon` for your page.


## spec

- **product** - Supabase product that owns the function

 ## Content reuse


If you copy the same content multiple times across different files, create a **partial** for content reuse instead. Partials are MDX files contained in [`apps/docs/components/MDX`](https://github.com/supabase/supabase/tree/master/apps/docs/components/MDX). They contain reusable snippets that can be inserted in multiple pages. For example, you can create a partial to define a common setup step for a group of tutorials.


To use a partial, import it into your MDX file. You can also set up a partial to automatically import by including it in the `components` within [`apps/docs/components/index.tsx`](https://github.com/supabase/supabase/blob/master/apps/docs/components/index.tsx).



### Links

Link text should be descriptive. The reader should understand where the link goes from reading the link text alone. This is important for accessibility. For example, don't use `here` as link text.

Use relative links when linking within the site domain. For example, `[link to another page in  docs](/docs/guides/getting-started)`.

### Images

Images are uploaded in the `apps/docs/public/img` folder.

For vector illustrations, use `svg`. For screenshots and non-vector graphics, use `png`. (These are automatically converted to `webp` for supported browsers.)


### Lists

Use ordered lists for steps that must be taken one after the other. Use unordered lists when order doesn't matter.



### Tabs

Use tabs to provide alternative instructions for different platforms or languages.
```
<Tabs
  scrollable
  size="small"
  type="underlined"
  defaultActiveId="npm"
  queryGroup="packagemanager"
>
<TabPanel id="npm" label="npm">

// ...

</TabPanel>
<TabPanel id="yarn" label="Yarn">

// ...

</TabPanel>
</Tabs>
```


### Videos

Include videos as TOC (Table of Contents) videos rather than putting them in the main text.

You can define a TOC video in the page frontmatter:

```yaml
---
tocVideo: 'rzglqRdZUQE',
---
```


## Styling

- Capitalize the first word in heading. `Set up authentication` rather than `Set Up Authentication`.
- comma separated list. `realtime, database, and authentication` rather than `realtime, database and authentication`.
- Use the present tense as much as possible.  `the AI assistant answers your question` rather than `the AI assistant will answer your question`.


## Word usage and spelling

Use American English. If in doubt, consult the [Merriam-Webster dictionary](https://www.merriam-webster.com/).

Here are some exceptions and Supabase-specific guidelines.

### General word usage

- **Filler words**: You can often make your writing more concise by removing these words. (Some of these words can also sound patronizing.)
  - Actually
  - Easy, easily
  - Just
  - Let's
  - Please
  - Simple, simply
- **UI elements**
  - Buttons are `click`ed.
  - Checkboxes are `select`ed.
  - Toggles are `enable`d and `disable`d.
  - Labels of UI elements are bolded. For example, `Click **Confirm**.`


### Word list

- `Backend` isn't hyphenated (not `back-end`).
- `Frontend` isn't hyphenated (not `front-end`).
- `Login` is a noun. `Log in` is a verb.
- `Postgres` is capitalized, except in code, and used instead of `PostgreSQL`.
- `Setup` is a noun. `Set up` is a verb.
- `Supabase` is capitalized (not `supabase`), except in code.
- `Supabase Platform` is in title case (not `Supabase platform`).


## Search
Search is handled using a Supabase instance. During CI, [a script](https://github.com/supabase/supabase/blob/master/apps/docs/scripts/search/generate-embeddings.ts) aggregates all content sources (eg. guides, reference docs, etc), indexes them using OpenAI embeddings, and stores them in a Supabase database.
