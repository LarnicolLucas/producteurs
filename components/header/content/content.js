import styles from './content.module.sass'
import Image from 'next/image'


export default function Content(props){

    return <>

        <section className={styles.container}>
            <figure className={styles.figure}>
                <article>
                    <Image src="/images/head/illustration0.svg" alt='Left illustration' layout="fill" />
                </article>
            </figure>
            <main className={styles.main}>

                <h1>
                    {props.data.titre[0]}<strong style={{color: props.color[3]}}>{props.data.titre[1]}</strong>
                </h1>
                <p className={styles.p} style={{color: props.color[1]}}>
                    {props.data.description}
                </p>
                <figure className={styles.figure2}>
                    <article>
                        <Image src="/images/head/illustration05.svg" alt='Decorative middle illustration' layout="fill" />
                    </article>
                </figure>
            </main>
            <figure className={styles.figure+" "+styles.hide}>
                <article>
                    <Image src="/images/head/illustration1.svg" alt='Right illustration' layout="fill" />
                </article>
            </figure>
        </section>
        
    </>
}