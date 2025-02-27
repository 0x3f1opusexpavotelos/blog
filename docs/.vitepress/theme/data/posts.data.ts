import { createContentLoader } from "vitepress"
import { dateToDateString } from "../utils/dateUtils"
interface Post {
  title: string
  url: string
  date: {
    time: number
    dateString: string
    string: string
  },
  excerpt: string | undefined
}


declare const data: Post[]

export { data }

export default createContentLoader(['dashboard/*.md', 'deploy/*.md'], {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})



function formatDate(raw?: Date): Post['date'] {

// console.log('raw ->%s: %s', typeof raw, JSON.stringify(raw))
  const date = raw ? new Date(raw) : new Date()
  // console.log('date->', date)
  date.setUTCHours(12)
  return {
    time: +date,
    dateString: dateToDateString(date, '-'),
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
