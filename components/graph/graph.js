import Chart from 'chart.js/auto'
import {useRef, useEffect} from 'react'
import Params from './createParams'
import styles from './graph.module.sass'
import icons from '../iconLink/iconLink'

export default function Graph(props){

    const canvas = useRef();
    const params = Params(props.datas);
    
    useEffect(()=> {

        const graph = new Chart(canvas.current.getContext('2d'), params);

        return ()=> graph.destroy()
    })
    
    return <>
        <section className={styles.container}>
            <figcaption className={styles.figcaption}>
                <figure className={styles.logoFigure}>
                    <img className={styles.logoImg} src={icons[props.type]} />
                </figure>

                <h3>{props.datas.label}</h3>

            </figcaption>
            <figure className={styles.figure}>
                <canvas ref={canvas} width="400" height="200"></canvas>
            </figure>
        </section>
    </>
}