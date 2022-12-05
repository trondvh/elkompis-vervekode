import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Elkompis vervekode!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Elkompis vervekode" />
        <p className="description">
          Spar 500 kr på neste strømregning, bytt til Elkompis: <a href="https://elkompis.no/referral?invite=GFvVE">GFvVE</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
