import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'

import os from 'os';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Jae&apos;s website</title>
        <meta name="description" content="Official website of Jae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main crt">
        <p><Link href="/">Return to the index</Link></p>
        <br />
        <h3>Shoutout to those people who have/are supporting me financially.</h3>
        <p>Read <a rel="noreferrer" href="https://library.jae.fi/doku.php?id=help_me">that page</a> for more information.</p>
        <br/>
        <ul>
          <li>Anonymous - 23.07€/w</li>
        </ul>
      </div>

    </div>
  )
}

export default Home
