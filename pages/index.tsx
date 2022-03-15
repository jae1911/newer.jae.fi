import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="font-sans bg-slate-900 text-white text-slate-100">
      <Head>
        <title>Jae&apos;s website</title>
        <meta name="description" content="Official website of Jae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen text-center">
        <header>
          <div className="text-9xl font-bold">
            Jae
          </div>
          <div className="text-7x1">
            Code, networking & Beeps&apos;n Boops
          </div>
        </header>
      </div>

      <footer className={styles.footer}>
        Jae, robot on the internet since 2012
      </footer>
    </div>
  )
}

export default Home
