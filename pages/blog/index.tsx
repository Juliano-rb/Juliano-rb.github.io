import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getAllArticles } from '../../src/utils/mdx'
import dayjs from 'dayjs'
import { uniqueId } from 'lodash'
import SEOTags from '../../src/components/SEOTags'

export default function BlogPage ({ posts }: any) { // TODO: Criar tipos
  return (
    <React.Fragment>
      <Head>
        <title>Blog de Juliano R. Barbosa</title>
        <SEOTags title="Blog de Juliano R. Barbosa."
          description="Blog de Juliano R. Barbosa."
          image="https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png"/>
      </Head>
      <div>
        {posts.map((frontMatter: any) => {
          return (
            <Link key={uniqueId()} href={`/blog/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps () {
  const articles = await getAllArticles()

  articles
    .map((article) => article)
    .sort((a, b) => {
      if (a.publishedAt > b.publishedAt) return 1
      if (a.publishedAt < b.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse()
    }
  }
}
