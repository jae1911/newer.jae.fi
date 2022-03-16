import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="font-sans bg-slate-700 text-white text-slate-100 scroll-smooth cursor-cell">
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
          <div className="text-2xl">
            Code, networking & Beeps&apos;n Boops
          </div>
        </header>
      </div>

      <div className="flex justify-center items-center h-screen text-center">
        <header>
          <h2 className="text-3xl">About me</h2>
          <p>Hey there, my name is Jae Lo Presti, I&lsquo;m 20 and I&lsquo;m living in Helsinki, Finland.<br/>
          I am involved in TeDomum.net as an admin and developer.<br/>
          I also happen to run AS211696 (scroll down for more) which I use as my own private ISP.<br/>
          I am developer, sysadmin and even a network person when needed!<br/><br/>
          If you wish to discuss with me, you can reach me via Matrix with <code>@me:jae.fi</code> or via email at <code>me@jae.fi</code>.</p>
        </header>
      </div>

       <div className="flex justify-center items-center h-screen text-center">
        <header>
          <h2 className="text-3xl">AS211696</h2>
          <p>I am running the network AS211696 (Noiseless Systems).<br/>
          </p>
        </header>
      </div>

      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Jae, robot on the internet since 2012.
        </span>
  </footer>

    </div>
  )
}

export default Home
