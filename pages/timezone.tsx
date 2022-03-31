import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clock from 'react-live-clock'

import os from 'os';

const Home: NextPage = () => {
  let ascii = `
 ▄▄▄██▀▀▀▄▄▄      ▓█████ 
   ▒██  ▒████▄    ▓█   ▀ 
   ░██  ▒██  ▀█▄  ▒███   
▓██▄██▓ ░██▄▄▄▄██ ▒▓█  ▄ 
 ▓███▒   ▓█   ▓██▒░▒████▒
 ▒▓▒▒░   ▒▒   ▓▒█░░░ ▒░ ░
 ▒ ░▒░    ▒   ▒▒ ░ ░ ░  ░
 ░ ░ ░    ░   ▒      ░   
 ░   ░        ░  ░   ░  ░`;

 let network = os.hostname();

  return (
    <div>
      <Head>
        <title>Jae&apos;s website</title>
        <meta name="description" content="Official website of Jae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main crt">
        <pre>{ascii}</pre>
        <br/>
        <h1>Jae's Timezone</h1>
        <p><Link href="/">Return to the index</Link></p>
        <br />
        <h2><Clock format={'HH:mm:ss'} ticking={true} timezone={'EET'} /></h2>
      </div>

    </div>
  )
}

export default Home
