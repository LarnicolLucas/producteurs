import styles from './socialMedia.module.sass'

export default function socialMedia(props){

    const list = [
        {id: 0, src: "/images/socialMedia/github.svg"},
        {id: 1, src: "/images/socialMedia/linkdin.svg"},
        {id: 2, src: "/images/socialMedia/openData.svg"},
        {id: 3, src: "/images/socialMedia/web.svg"}
    ].map(el => <figure className={styles.figure} key={el.id}>
        <img className={styles.img} src={el.src} />
    </figure>)
    
    return <>

        <section className={styles.container}>
            {list}
        </section>

    </>
}