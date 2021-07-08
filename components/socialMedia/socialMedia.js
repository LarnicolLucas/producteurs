import styles from './socialMedia.module.sass'
import Link from 'next/link'
import Image from 'next/image'

export default function socialMedia(props){

    const list = [
        {id: 0, src: "/images/socialMedia/github.svg", link: "https://github.com/LarnicolLucas/producteurs"},
        {id: 1, src: "/images/socialMedia/linkdin.svg", link: "https://www.linkedin.com/in/lucas-larnicol-52a995201/"},
        {id: 2, src: "/images/socialMedia/openData.svg", link: "https://data.enedis.fr/pages/accueil/?id=init"},
        {id: 3, src: "/images/socialMedia/web.svg", link: "https://www.llarnicol.com/"}
    ].map(el => <Link key={el.id} href={el.link} passHref><figure className={styles.figure}>
        <article className={styles.img}>
            <Image src={el.src} alt='Social Media img SVG' layout="fill" />
        </article>
    </figure></Link>)
    
    return <>

        <section className={styles.container}>
            {list}
        </section>

    </>
}