import styles from './logo.module.sass'
import Link from 'next/link'



export default function Header(props){
    return <>
        <Link href="https://www.llarnicol.com/" passHref>
            <article className={styles.container}>
            <figure className={styles.figure}>

                <img className={styles.img} src="/images/logo/logo.svg" />

            </figure>
            <figcaption className={styles.txt}>
                Lucas Larnicol
            </figcaption>

            </article>
        </Link>
    </>
}