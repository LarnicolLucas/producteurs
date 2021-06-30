import styles from './content.module.sass'



export default function Content(props){
    return <>

        <section className={styles.container}>
            <figure className={styles.figure}>
                <img src="/images/head/illustration0.svg" className={styles.img}/>
            </figure>
            <main className={styles.main}>

                <h1>
                    {props.data.titre}
                </h1>
                <p className={styles.p}>
                    {props.data.description}
                </p>
                <figure className={styles.figure2}>
                    <img src="/images/head/illustration05.svg" className={styles.img}/>
                </figure>
            </main>
            <figure className={styles.figure+" "+styles.hide}>
                <img src="/images/head/illustration1.svg" className={styles.img}/>
            </figure>
        </section>
        
    </>
}