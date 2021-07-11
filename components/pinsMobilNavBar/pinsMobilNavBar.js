import styles from './pinsMobilNavBar.module.sass'
import Image from 'next/image'
import Link from 'next/link'

export default function PinsMobileNavBAr(props){
    const imgSrc = props.src == undefined ? "/" : props.src;
    return <>

        <Link href={`/energie/${props.link}`} passHref>
            <section className={styles.container}>
            
                <figure className={styles.figure}>
                    <div className={styles.img}>
                        <Image src={imgSrc} alt='Icon of Energie' layout="fill" />
                    </div>
                </figure>
                <figcaption className={styles.title}>
                    <h4 className={styles.titleDescription}>{props.title}</h4>      
                </figcaption>
            
            </section>
        </Link>
    </>
}