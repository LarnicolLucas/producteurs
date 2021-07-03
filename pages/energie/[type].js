import {useRouter} from 'next/router'

import styles from './energie.module.sass'

import {useEffect, useState} from 'react'

import Head from 'next/head'
import palette from '../../components/palette/palette'

import Requete from '../../components/requetes/requetes'
import createList from '../../components/createList/createList'
import createDonut from '../../components/createList/createDonut'
import createDonutWithoutF5 from '../../components/createList/createDonutWithoutF5'
import filliereProd from '../../components/listProducteur/listProducteur'

import Graph from '../../components/graph/graph'
import Donut from '../../components/donut/donut'


export default function Home() {

  const [listData, setListData] = useState({});
  const [donutData, setDonutData] = useState({});
  const [donutData2, setDonutData2] = useState({})

  const router = useRouter();
  const { type } = router.query;

  const style= {
    background: palette[0],
    color: palette[2]
  };

  useEffect(async ()=>{

    if(type != undefined){ 

      try{
          const res0 = await fetch(Requete(-1, type, 0, 2021));
          const res1 = await fetch(Requete(7, null, 0, 2021));
          const data0 = await res0.json();
          const data1 = await res1.json();
          const newList0 = createList(data0.records);
          const newList1 = createDonut(data1.records);
          const newList2 = createDonutWithoutF5(data1.records);
          setListData(newList0);
          setDonutData(newList1);
          setDonutData2(newList2);

      } catch(err){
          console.log(err)
      }
    }
  }, [type]);


  return (
    <>
      <Head>
        <title>Analyse de l'énergie {filliereProd[type]}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={style}>

        <article className={styles.graphContainer}>

          <Graph datas={{
            label : `Evolution du nombre de producteurs de type ${filliereProd[type]} raccordé au réseau`,
            data: listData.data,
            legends: listData.legend,
            color: palette
            }}
            />

        </article>
        <article className={styles.graphContainer}>

          <Donut datas={{
            label : `Répartition des points de production raccordé au réseau`,
            data: donutData.data,
            legends: donutData.legend,
            color: palette
            }}
            />

        </article>
        <article className={styles.graphContainer}>

          <Donut datas={{
            label : `Répartition des points de production raccordé au réseau sans panneau solaires`,
            data: donutData2.data,
            legends: donutData2.legend,
            color: palette
            }}
            />

        </article>

      </section>

    </>


  )
}