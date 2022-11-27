import Head from 'next/head'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import PostsExplorer from '../src/components/PostsExplorer'
import SEOTags from '../src/components/SEOTags'
import { Post } from '../src/types/Post'
import { getAllArticles } from '../src/utils/mdx'
import { Section } from '../styles/pages.styles'

type Props ={
  posts: Post[];
}

export default function Home ({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Página de @jul1anoro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags title="Página de @jul1anoro"
          description="Portifólio e Blog pessoal de Juliano R. Barbosa."
          image="https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png"/>
      </Head>

      <Header />

      <main>
        <Section id='blog'>
          <h2>Blog</h2>
          <PostsExplorer posts={posts}/>
        </Section>
      </main>

      <Footer />
    </>
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
