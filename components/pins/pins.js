import styles from './pins.module.sass'
export default function Card(props){
    return <>
        <section className={styles.container}>
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