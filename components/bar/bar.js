import Chart from 'chart.js/auto';
import {useRef, useEffect} from 'react'
import Params from './createParams'
import styles from './bar.module.sass'
import icons from '../iconLink/iconLink'
import Image from 'next/image.js'

export default function Graph(props){

    const canvas = useRef();
    const params = Params(props.datas);

    const imgSrc = props.type == undefined ? '/' : icons[props.type];
    
    useEffect(()=> {

        const graph = new Chart(canvas.current.getContext('2d'), params);

        return ()=> graph.destroy()
    })
    
    return <>
        <section className={styles.container}>
            <figcaption className={styles.figcaption}>

                <figure className={styles.logoFigure}>
                    <Image className={styles.logoImg} src={imgSrc} layout="fill" />
                </figure>
                <h3>{props.datas.label}</h3>

            </figcaption>
            <figure className={styles.figure}>
                <canvas ref={canvas} width="400" height="200"></canvas>
            </figure>
        </section>
    </>
}