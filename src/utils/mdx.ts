import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import { Article } from '../types/Article'
import { Post, PostMetadata } from '../types/Post'

const articlesPath = path.posix.join('posts/articles')

export async function getSlug () {
  const paths = sync(`${articlesPath}/*.mdx`, {})

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug (slug: string): Promise<Article> {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source.toString()).text,
      ...data
    }
  }
}

export async function getAllArticles (): Promise<Post[]> {
  const articles = fs.readdirSync(path.join(process.cwd(), articlesPath))

  return articles.map(articleSlug => {
    const source = fs.readFileSync(
      path.join(process.cwd(), articlesPath, articleSlug),
      'utf-8'
    )
    const metadata = matter(source).data as PostMetadata

    return {
      ...metadata,
      slug: articleSlug.replace('.mdx', ''),
      readingTime: readingTime(source).text
    }
  })
}
