

// /**
//  * Compare frontmatter publication date
//  * @param {ContentData} a
//  * @param {ContentData} b
//  */
// export const comparePublicationDate = (a, b) => b.frontmatter.publishedAt - a.frontmatter.publishedAt

// const now = new Date()

// /**
//  * Check if frontmatter publication date is in the past.
//  * @param {ContentData} content
//  */
// export const isPublished = content => content.frontmatter.publishedAt < now

// /**
//  * Check if there’s a custom excerpt in the frontmatter.
//  * @param {ContentData} content
//  */
// export const hasExcerptInFrontmatter = content => content.frontmatter.excerpt

// /**
//  * Convert a coma-separated list of tags to an array of tags.
//  * @param {ContentData} content
//  * @returns {string[]}
//  */
// export const tagsToArray = content => (content.frontmatter.tags?.split(',') ?? [])
//   .map(tag => tag.trim())
