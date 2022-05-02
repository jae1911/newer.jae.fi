import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Clock from 'react-live-clock'

import os from 'os';

// Custom components
import Art from 'components/art'
import Alphabet from 'components/letters'

const Home: NextPage = () => {
 let network = os.hostname();

 let something = `        <p> We hide in the silence<br/>
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
`;

  return (
    <div>
      <Head>
        <title>Jae&apos;s website</title>
        <meta name="description" content="Official website of Jae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main crt">
        <Art />

        <div className="fontest">
          <Alphabet letter='W'/><Alphabet letter='E'/> <Alphabet letter='H'/><Alphabet letter='I'/><Alphabet letter='D'/><Alphabet letter='E'/> <Alphabet letter='I'/><Alphabet letter='N'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='S'/><Alphabet letter='I'/><Alphabet letter='L'/><Alphabet letter='E'/><Alphabet letter='N'/><Alphabet letter='C'/><Alphabet letter='E'/>  <Alphabet letter='I'/><Alphabet letter='N'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='D'/><Alphabet letter='A'/><Alphabet letter='R'/><Alphabet letter='K'/><Alphabet letter='E'/><Alphabet letter='S'/><Alphabet letter='T'/> <Alphabet letter='C'/><Alphabet letter='O'/><Alphabet letter='R'/><Alphabet letter='N'/><Alphabet letter='E'/><Alphabet letter='R'/><Alphabet letter='S'/>  <Alphabet letter='W'/><Alphabet letter='A'/><Alphabet letter='I'/><Alphabet letter='T'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='G'/> <Alphabet letter='F'/><Alphabet letter='O'/><Alphabet letter='R'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='S'/><Alphabet letter='W'/><Alphabet letter='E'/><Alphabet letter='E'/><Alphabet letter='P'/> <Alphabet letter='O'/><Alphabet letter='F'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='S'/><Alphabet letter='E'/><Alphabet letter='A'/><Alphabet letter='R'/><Alphabet letter='C'/><Alphabet letter='H'/><Alphabet letter='L'/><Alphabet letter='I'/><Alphabet letter='G'/><Alphabet letter='H'/><Alphabet letter='T'/> <Alphabet letter='T'/><Alphabet letter='O'/> <Alphabet letter='P'/><Alphabet letter='A'/><Alphabet letter='S'/><Alphabet letter='S'/>  <Alphabet letter='A'/><Alphabet letter='N'/><Alphabet letter='D'/> <Alphabet letter='O'/><Alphabet letter='N'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='A'/><Alphabet letter='T'/> <Alphabet letter='H'/><Alphabet letter='I'/><Alphabet letter='D'/><Alphabet letter='D'/><Alphabet letter='E'/><Alphabet letter='N'/> <Alphabet letter='S'/><Alphabet letter='I'/><Alphabet letter='G'/><Alphabet letter='N'/><Alphabet letter='A'/><Alphabet letter='L'/>  <Alphabet letter='W'/><Alphabet letter='E'/> <Alphabet letter='S'/><Alphabet letter='T'/><Alphabet letter='R'/><Alphabet letter='I'/><Alphabet letter='K'/><Alphabet letter='E'/>  <Alphabet letter='P'/><Alphabet letter='A'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='T'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='G'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='W'/><Alphabet letter='O'/><Alphabet letter='R'/><Alphabet letter='L'/><Alphabet letter='D'/> <Alphabet letter='I'/><Alphabet letter='N'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='G'/><Alphabet letter='L'/><Alphabet letter='O'/><Alphabet letter='W'/> <Alphabet letter='O'/><Alphabet letter='F'/> <Alphabet letter='A'/> <Alphabet letter='S'/><Alphabet letter='P'/><Alphabet letter='E'/><Alphabet letter='C'/><Alphabet letter='T'/><Alphabet letter='R'/><Alphabet letter='A'/><Alphabet letter='L'/> <Alphabet letter='S'/><Alphabet letter='U'/><Alphabet letter='P'/><Alphabet letter='E'/><Alphabet letter='R'/><Alphabet letter='N'/><Alphabet letter='O'/><Alphabet letter='V'/><Alphabet letter='A'/>  <Alphabet letter='I'/><Alphabet letter='L'/><Alphabet letter='L'/><Alphabet letter='U'/><Alphabet letter='M'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='A'/><Alphabet letter='T'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='G'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='S'/><Alphabet letter='K'/><Alphabet letter='Y'/> <Alphabet letter='I'/><Alphabet letter='N'/> <Alphabet letter='G'/><Alphabet letter='E'/><Alphabet letter='M'/><Alphabet letter='S'/><Alphabet letter='T'/><Alphabet letter='O'/><Alphabet letter='N'/><Alphabet letter='E'/><Alphabet letter='S'/> <Alphabet letter='A'/><Alphabet letter='N'/><Alphabet letter='D'/> <Alphabet letter='F'/><Alphabet letter='I'/><Alphabet letter='R'/><Alphabet letter='E'/><Alphabet letter='W'/><Alphabet letter='O'/><Alphabet letter='R'/><Alphabet letter='K'/><Alphabet letter='S'/>  <Alphabet letter='U'/><Alphabet letter='N'/><Alphabet letter='T'/><Alphabet letter='I'/><Alphabet letter='L'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='W'/><Alphabet letter='E'/> <Alphabet letter='C'/><Alphabet letter='R'/><Alphabet letter='O'/><Alphabet letter='S'/><Alphabet letter='S'/> <Alphabet letter='B'/><Alphabet letter='E'/><Alphabet letter='Y'/><Alphabet letter='O'/><Alphabet letter='N'/><Alphabet letter='D'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='H'/><Alphabet letter='O'/><Alphabet letter='R'/><Alphabet letter='I'/><Alphabet letter='Z'/><Alphabet letter='O'/><Alphabet letter='N'/>  <Alphabet letter='A'/><Alphabet letter='N'/><Alphabet letter='D'/> <Alphabet letter='N'/><Alphabet letter='O'/><Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='G'/> <Alphabet letter='R'/><Alphabet letter='E'/><Alphabet letter='M'/><Alphabet letter='A'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='S'/> <Alphabet letter='O'/><Alphabet letter='F'/> <Alphabet letter='U'/><Alphabet letter='S'/>...
          <br/>
          ...<Alphabet letter='B'/><Alphabet letter='U'/><Alphabet letter='T'/> <Alphabet letter='A'/> <Alphabet letter='T'/><Alphabet letter='R'/><Alphabet letter='A'/><Alphabet letter='I'/><Alphabet letter='L'/> <Alphabet letter='O'/><Alphabet letter='F'/> <Alphabet letter='U'/><Alphabet letter='L'/><Alphabet letter='T'/><Alphabet letter='R'/><Alphabet letter='A'/><Alphabet letter='V'/><Alphabet letter='I'/><Alphabet letter='O'/><Alphabet letter='L'/><Alphabet letter='E'/><Alphabet letter='T'/> <Alphabet letter='F'/><Alphabet letter='A'/><Alphabet letter='D'/><Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='G'/> <Alphabet letter='I'/><Alphabet letter='N'/><Alphabet letter='T'/><Alphabet letter='O'/> <Alphabet letter='T'/><Alphabet letter='H'/><Alphabet letter='E'/> <Alphabet letter='M'/><Alphabet letter='I'/><Alphabet letter='S'/><Alphabet letter='T'/>
        </div>
        <br/>
        <p><Link href="/">Return to the index</Link></p>
        <br/><br/>
      </div>

    </div>
  )
}

export default Home
