import Chart from 'chart.js/auto';
import {useRef, useEffect} from 'react'
import Params from './createParams'

export default function Graph(props){

    /*<Graph datas={{
        label : 'Graph Test',
        data: [50, 10, 50, 90],
        legends: ["Sisi","Test", "Kariis", "test"],
        color: color
        }}
        />
    */

    const canvas = useRef();

    useEffect(()=> {

        const params = Params(props.datas, canvas.current);
        const graph = new Chart(canvas.current.getContext('2d'), params);

        //return ()=> delete graph
    }, [])
    
    return <>
        <canvas ref={canvas} width="400" height="400"></canvas>
    </>
}