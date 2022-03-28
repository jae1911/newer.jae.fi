import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clock from 'react-live-clock'

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
        <p>Welcome to my website<br/>
        It is <Clock format={'HH:mm:ss'} ticking={true} timezone={'EET'} /> in Helsinki</p>
        <br/>
        <p>My name is Jae Lo Presti, I was born in Annecy, Savoy but I am living in Helsinki, Finland.</p>
        <p>I am developer and a sysadmin. I also like to meddle in networking sometimes (I am running my own ISP, <a href="https://www.peeringdb.com/asn/211696" target="_blank">Noiseless Systems</a>).</p>
        <br/>
        <p>- Some important links -</p>
        <ul>
          <li><a target="_blank" href="https://github.com/jae1911">My Github</a></li>
          <li><a target="_blank" href="https://matrix.to/#/#home:jae.fi">My Matrix room</a></li>
          <li><a target="_blank" href="https://blog.jae.fi">My Blog</a></li>
        </ul>

        <br/>
        <p>If you wish to contact me, please use Matrix as it is the fastest way. You may also use the email me@jae.fi; this email is selfhosted and nobody except myself can snoop on it.</p>
      </div>

    </div>
  )
}

export default Home
