import { defineCollection, z } from "astro:content"
import { format } from 'date-fns'




const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default('about'),
    except: z.string().optional(),
    publishedAt: z
      .string()
      .transform((str => format(new Date(str), 'MMMM d, yyyy'))),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    quotes: z.array(z.string()).optional(),
    referrers: z.array(z.string()).optional(),
    cover: z.string().optional(),
  })
})


// expose a single collection to register your collections
// key should match your collection direcotry name in `src/content`

export const collections = {
  posts: postsCollection,
}
