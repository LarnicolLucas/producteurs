import styles from './pins.module.sass'
import palette from '../palette/palette'
import Link from 'next/link'

export default function Card(props){
    const style= {
        color: palette[2]
    }
    const styleSelected ={
        color: palette[0],
        background: palette[2]
    }

    //console.log(props.selected)
    return <>
        <Link href={`/energie/${props.link}`}>
            <section style={props.selected ? styleSelected : style} className={styles.container}>

                <figure className={styles.figure}>
                    <img className={styles.img} src={props.src} />
                </figure>
                <figcaption className={styles.title}>
                    {props.title}           
                </figcaption>

            </section>
        </Link>
    </>
}