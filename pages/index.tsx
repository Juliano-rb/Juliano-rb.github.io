import Head from 'next/head'
import Image from 'next/image'
import SEOTags from '../src/components/SEOTags'

export default function Home () {
  return (
    <div >
      <Head>
        <title>Página de @jul1anoro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags title="Página de @jul1anoro"
          description="Portifólio e Blog pessoal de Juliano R. Barbosa."
          image="https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png"/>
      </Head>

      <main>

      </main>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
