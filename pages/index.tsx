import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clock from 'react-live-clock'

import os from 'os';

// Custom components
import Art from 'components/art'
import Alphabet from 'components/letters'

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
        <p>Welcome to my website<br/>
        It is <Clock format={'HH:mm:ss'} ticking={true} timezone={'EET'} /> in Helsinki</p>
        <p><span className="red">If you are a recruiter/CEO or whatever and is looking for a developer, contact me, I&apos;m looking for a job.</span></p>
        <br/>
        <p>My name is <span className="orange">Jae Lo Presti</span>, I was born in Annecy, Savoy but I am living in Helsinki, Finland.</p>
        <p>I am developer and a sysadmin. I also like to meddle in networking sometimes (I am running my own ISP, <a href="https://www.peeringdb.com/asn/211696" target="_blank" rel="noreferrer">Noiseless Systems</a>).</p>
        <br/>
        <p>- Some important links -</p>
        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/jae1911">My Github</a></li>
          <li><a href="matrix:roomid/dn0home-v9:jae.fi?action=join&via=jae.fi&via=matrix.org&via=pikaviestin.fi&via=the-apothecary.club">My Matrix room</a> (#home:jae.fi | #dn0home:matrix.org)</li>
          <li><a target="_blank" rel="noreferrer" href="https://blog.jae.fi">My Blog</a></li>
        </ul>

        <br/>
        <p>If you wish to contact me, <span className="red">please use Matrix</span> as it is the fastest way. You may also use the email me@jae.&#123;fi,su&#125; this email is selfhosted and nobody except myself can snoop on it. <a rel="noreferrer" href="https://keys.jae.fi/hkp/E925CA48B1CF851298321784025F43E0BE5056C0" target="_blank">A GPG key is available</a> for this address.</p>
        <p>You may also contact me using Threema with the ID <span className="red">D7ANR4CV</span>.</p>
        <br/>
        <p><span className="red">Important: I do not have social medias, my channels of communication are my blog and my Matrix room, nothing else at the moment.</span></p>

        <br/>
        <hr/>
        <br/>

        <small>This page is served on jae.fi and jae.su<br/><span className="torUri">A TOR version is available on fxc3qybpnn363p4bj4lqfncmqwmqketrvokfdk62t7fcuqotsr4tfsid.onion</span><br/><Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='D'/><Alphabet letter='N'/><Alphabet letter='0'/> <Alphabet letter='S'/><Alphabet letter='Y'/><Alphabet letter='S'/><Alphabet letter='T'/><Alphabet letter='E'/><Alphabet letter='M'/></small>

        <p className="servedBy">Served by {network}; 🏳️‍⚧️</p>
      </div>

    </div>
  )
}

export default Home
