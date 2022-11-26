import Head from 'next/head'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import SEOTags from '../src/components/SEOTags'

export default function Home () {
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

      </main>

      <Footer />
    </>
  )
}
