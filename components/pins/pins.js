import styles from './pins.module.sass'
import palette from '../palette/palette'
import Link from 'next/link'
import Image from 'next/image'

export default function Card(props){
    const style= {
        color: palette[2]
    }
    const styleSelected ={
        color: palette[0],
        background: palette[2]
    }

    const imgSrc= props.src == undefined ? "/" : props.src;

    //console.log(props.selected)
    return <>
        <Link href={`/energie/${props.link}`} passHref>
            <section style={props.selected ? styleSelected : style} className={styles.container}>

                <figure className={styles.figure}>
                    <article className={styles.img}>
                        <Image src={imgSrc} alt='Pins Nav Logo energie' layout="fill" />
                    </article>
                </figure>
                <figcaption className={styles.title}>
                    {props.title}           
                </figcaption>

            </section>
        </Link>
    </>
}