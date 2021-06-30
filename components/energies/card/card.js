import styles from './card.module.sass'
export default function Card(props){
    return <>
        <section className={styles.container}>
            <figure className={styles.figure}>
                <img className={styles.img} src={props.src} />
            </figure>
            <figcaption className={styles.title}>
                {props.title}
            </figcaption>
        </section>
    </>
}