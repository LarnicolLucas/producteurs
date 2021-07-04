import Graph from "../graph/graph"
import Bar from '../bar/bar'
import Donut from '../donut/donut'

import Requete from "../requetes/requetes"

import createList from '../createList/createList'
import createDonut from '../createList/createDonut'
import createDonutWithoutF5 from '../createList/createDonutWithoutF5'
import createBar from '../createList/createBar'

import palette from "../palette/paletteGraph"
import filliereProd from '../listProducteur/listProducteur'

import {useEffect, useState} from 'react'

export default function Handler(props){

    const [data, setData] = useState({
        label: "",
        data: [],
        legends: [],
        color: palette
    });

    const items = {

        graph : {
            template : <Graph datas={data}/>,
            fn : createList,
            request: [-1, props.type, 0, 2021],
            label: `Evolution du nombre de producteurs de type ${filliereProd[props.type]} raccordé au réseau`
        },
        donut : {
            template :<Donut datas={data}/>,
            fn : createDonut,
            request: [7, null, 0, 2021],
            label: `Répartition des points de production raccordé au réseau`
        },
        donutF5 : {
            template: <Donut datas={data}/>,
            fn : createDonutWithoutF5,
            request: [7, null, 0, 2021],
            label: `Répartition des points de production raccordé au réseau sans panneaux solaires`
        },
        bar : {
            template : <Bar datas={data}/>,
            fn : createBar,
            request: [8, props.type, null, 2021],
            label: `Répartition des points de production de type ${filliereProd[props.type]} selon  leur puissances`
        }
    };

    useEffect(async ()=>{

        if(props.type != undefined){ 
    
          try{
              const res = await fetch(Requete(...items[props.items].request));
              const data = await res.json();
    
              const newList = items[props.items].fn(data.records);
    
              setData({
                  label: items[props.items].label,
                  data: newList.data,
                  legends: newList.legend,
                  color: palette
              });
              
            } catch(err){
              console.log(err)
            }
        }
      }, [props.type]);
    
    return <>
        {items[props.items].template}
    </>
}