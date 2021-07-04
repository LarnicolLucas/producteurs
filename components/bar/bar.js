import Chart from 'chart.js/auto';
import {useRef, useEffect} from 'react'
import Params from './createParams'

export default function Graph(props){

    const canvas = useRef();
    const params = Params(props.datas);
    
    useEffect(()=> {

        const graph = new Chart(canvas.current.getContext('2d'), params);

        return ()=> graph.destroy()
    })
    
    return <>
        <canvas ref={canvas} width="400" height="400"></canvas>
    </>
}