import styles from './pins.module.sass'
import palette from '../palette/palette'

export default function Card(props){
    const style= {
        color: palette[2]
    }
    return <>
        <section style={style} className={styles.container}>
            <a href={`/energie/${props.link}`}>
                <figure className={styles.figure}>
                    <img className={styles.img} src={props.src} />
                </figure>
                <figcaption className={styles.title}>
                    {props.title}           
                </figcaption>
            </a>
        </section>
    </>
}