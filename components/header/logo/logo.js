import styles from './logo.module.sass'
import Link from 'next/link'
import Image from 'next/image'



export default function Header(props){
    return <>
        <Link href="https://www.llarnicol.com/" passHref>
            <article className={styles.container}>
            <figure className={styles.figure}>
                
                
                <Image src="/images/logo/logo.svg" alt='Logo Lucas Larnicol' layout="fill" />
                

            </figure>
            <figcaption className={styles.txt}>
                Lucas Larnicol
            </figcaption>

            </article>
        </Link>
    </>
}