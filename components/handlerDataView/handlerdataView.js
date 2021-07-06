import Graph from "../graph/graph"
import Bar from '../bar/bar'
import Donut from '../donut/donut'

import Requete from "../requetes/requetes"

import createList from '../createList/createList'
import createDonut from '../createList/createDonut'
import createDonutWithoutF5 from '../createList/createDonutWithoutF5'
import createBar from '../createList/createBar'
import createDonutByPower from "../createList/createDonutByPower"

import paletteGraph from "../palette/paletteGraph"
import palette from "../palette/palette"
import filliereProd from '../listProducteur/listProducteur'

import Loader from "../loader/loader"

import {useEffect, useState} from 'react'

export default function Handler(props){

    const emptyData = {
        label: "",
        data: [],
        legends: [],
        color: paletteGraph,
        colorTxt: palette
    }

    const [data, setData] = useState(emptyData);
    const [display, setDisplay] = useState(false)

    const items = {

        graph : {
            template : <Graph datas={data} type={props.type}/>,
            fn : createList,
            request: [-1, props.type, 0, props.year],
            label: `Evolution du nombre de producteurs de type ${filliereProd[props.type]} en ${props.year}`
        },
        donut : {
            template :<Donut datas={data} type={props.type}/>,
            fn : createDonut,
            request: [7, null, 0, props.year],
            label: `Répartition des producteurs raccordé au réseau en ${props.year}`
        },
        donutF5 : {
            template: <Donut datas={data} type={props.type}/>,
            fn : createDonutWithoutF5,
            request: [7, null, 0, props.year],
            label: `Répartition des points sans panneaux solaires en ${props.year}`
        },
        bar : {
            template : <Bar datas={data} type={props.type}/>,
            fn : createBar,
            request: [8, props.type, null, props.year],
            label: `Répartition des producteurs de type ${filliereProd[props.type]} selon  leur puissances en ${props.year}`
        },
        donutByPower: {
            template : <Donut datas={data} type={props.type}/>,
            fn : createDonutByPower,
            request: [8, "F0", null, props.year],
            label: `Répartition des producteurs selon leur puissances en ${props.year}`
        },
    };

    useEffect(async ()=>{

        if(props.type != undefined){ 

            setDisplay(false);
            setData(emptyData);
    
          try{
              const res = await fetch(Requete(...items[props.items].request));
              const data = await res.json();
    
              const newList = items[props.items].fn(data.records);
    
              setData({
                  label: items[props.items].label,
                  data: newList.data,
                  legends: newList.legend,
                  color: paletteGraph,
                  colorTxt: palette
              });

              setDisplay(true)
              
            } catch(err){
              console.log(err)
            }
        }
      }, [props.type, props.year]);
    
    return <>
        <section style={{display: display ? "none" : "block"}}>

            <Loader />

        </section>
        
        {items[props.items].template}
    </>
}