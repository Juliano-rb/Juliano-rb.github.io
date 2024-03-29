import dayjs from 'dayjs'
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx'
import { MDXRemote } from 'next-mdx-remote'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import Head from 'next/head'
// import { SectionTitle, Text } from '../../data/components/mdx-components'

export default function Blog ({ post: { source, frontmatter } }: any) {
  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | My blog`}</title>
      </Head>
      <div className="article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="publish-date">
          {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
          {frontmatter.readingTime}
        </p>
        <div className="content">
          <MDXRemote {...source} /* components={{ Image , SectionTitle, Text }} */ />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps ({ params }: any) {
  // fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] }
          },
          { behaviour: 'wrap' }
        ],
        rehypeHighlight,
        rehypeCodeTitles
      ]
    }
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter
      }
    }
  }
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths () {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false
  }
}
