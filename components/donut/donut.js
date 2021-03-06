import Chart from 'chart.js/auto';
import {useRef, useEffect} from 'react'
import Params from './createParams'
import styles from './donut.module.sass'

export default function Graph(props){

    const canvas = useRef();


    useEffect(()=> {

        const params = Params(props.datas, canvas.current);
        const graph = new Chart(canvas.current.getContext('2d'), params);

        return ()=> graph.destroy()
    })
    
    return <>
        <section className={styles.container}>
            <figcaption className={styles.figcaption}>

                <h3>{props.datas.label}</h3>

            </figcaption>
            <figure className={styles.figure}>
                <canvas ref={canvas} width="400" height="200"></canvas>
            </figure>
        </section>
        
    </>
}