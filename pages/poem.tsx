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
        <p> We hide in the silence<br/>
in the darkest corners<br/>
waiting for the sweep of the searchlight to pass<br/>
And on that hidden signal<br/>
We strike<br/>
Painting the world in the glow of a spectral supernova<br/>
Illuminating the sky in gemstones and fireworks<br/>
Until the we cross beyond the horizon<br/>
and nothing remains of us...<br/>
<br/>
...but a trail of ultraviolet fading into the mist</p><br/>
        <p><Link href="/">Return to the index</Link></p>
      </div>

    </div>
  )
}

export default Home
