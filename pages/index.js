import Head from 'next/head'
import styles from '../styles/Home.module.css'
import palette from '../components/palette/palette'

import Header from '../components/header/header'

import EnergieSelect from '../components/energies/energieSlect/energieSelect'


export default function Home() {

  const data = {
    titre: ["Producteurs Electriques du réseau ", "ENEDIS" ],
    description: `Trouver facilement les données relatives aux producteur français 
    d'énergie électrique raccordé au réseau de distribution. 
    Classé en fonction de leur puissance, de leur type et de leur années d'implantation sur le réseau. Bon voyage !`
  };

  const style= {
    background: palette[0],
    color: palette[2]
  }

  return (
    <>
      <Head>
        <title>Production Electrique en France</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={style}>

        <Header data={data} color={palette}/>

        <EnergieSelect color={palette}/>

      </section>

    </>


  )
}
