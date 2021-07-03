import styles from './card.module.sass'
export default function Card(props){
    return <>
        <section className={styles.container}>
            <a href={`/energie/${props.link}`}>
                <figure className={styles.figure}>
                    <img className={styles.img} src={props.src} />
                </figure>
                <figcaption className={styles.title}>
                    <h4 className={styles.titleDescription}>{props.title}</h4>
                    <p style={{color: props.color[1]}}>{props.description}</p>
                    
                </figcaption>
            </a>
        </section>
    </>
}