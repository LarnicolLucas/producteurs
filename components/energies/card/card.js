import styles from './card.module.sass'
import Link from 'next/link'
import Image from 'next/image'

export default function Card(props){
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
                    <p className={styles.p} style={{color: props.color[1]}}>{props.description}</p>
                    
                </figcaption>
            
            </section>
        </Link>
    </>
}