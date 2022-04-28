import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clock from 'react-live-clock'

import os from 'os';

// Custom components
import Art from 'components/art'

const Home: NextPage = () => {
 let network = os.hostname();

  return (
    <div>
      <Head>
        <title>Jae&apos;s website</title>
        <meta name="description" content="Official website of Jae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main crt">
        <Art />
        <br/>
        <p><Link href="/">Return to the index</Link></p>
        <br/>
        <p>All pictures in those albums are under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC-BY-SA 4.0</a> license.</p>
        <br/>
        <p>- All the current photo albums -</p>
        <ul>
          <li><a href="https://pix.jae.fi/s/jae/landscape" rel="noreferrer" target="_blank">Landscapes</a></li>
          <li><a href="https://pix.jae.fi/s/jae/city" rel="noreferrer" target="_blank">City</a></li>
          <li><a href="https://pix.jae.fi/s/jae/infrastructure" rel="noreferrer" target="_blank">Infrastructure</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Home
