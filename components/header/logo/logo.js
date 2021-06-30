import styles from './logo.module.sass'



export default function Header(props){
    return <>
        <article className={styles.container}>
        <figure className={styles.figure}>

            <img className={styles.img} src="/images/logo/logo.svg" />

        </figure>
        <figcaption className={styles.txt}>
            Lucas Larnicol
        </figcaption>

        </article>
        
    </>
}