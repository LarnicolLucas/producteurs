import styles from './card.module.sass'
import Link from 'next/link'

export default function Card(props){
    return <>
        <Link href={`/energie/${props.link}`}>
            <section className={styles.container}>
            
                <figure className={styles.figure}>
                    <img className={styles.img} src={props.src} />
                </figure>
                <figcaption className={styles.title}>
                    <h4 className={styles.titleDescription}>{props.title}</h4>
                    <p className={styles.p} style={{color: props.color[1]}}>{props.description}</p>
                    
                </figcaption>
            
            </section>
        </Link>
    </>
}