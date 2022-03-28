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
 ░   ░        ░  ░   ░  ░

 We hide in the silence
in the darkest corners
waiting for the sweep of the searchlight to pass
And on that hidden signal
We strike
Painting the world in the glow of a spectral supernova
Illuminating the sky in gemstones and fireworks
Until the we cross beyond the horizon
and nothing remains of us...

...but a trail of ultraviolet fading into the mist
`;

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
        <p><Link href="/">Return to the index</Link></p>
      </div>

    </div>
  )
}

export default Home
