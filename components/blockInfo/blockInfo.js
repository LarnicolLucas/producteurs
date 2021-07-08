import styles from './blockInfo.module.sass'
import Image from 'next/image'

export default function blockInfo(props){

    const style= {
        background: props.data.color
    };

    const secondaryTextStyle= {
        color: props.data.txt2Color
    };

    const imgSrc = props.data.src == undefined ? '/' : props.data.src;
    
    return <>
        <section style={style} className={styles.container}>

            <figure className={styles.figure}>
                <Image className={styles.img} src={imgSrc} alt='Header Icon' layout="fill" />
            </figure>
            <h4 className={styles.titre}>{props.data.titre}</h4>
            <p style={secondaryTextStyle} className={styles.p}>
                {props.data.description1}
            </p>
            <p style={secondaryTextStyle} className={styles.p}>
                {props.data.description2}
            </p>
            
        </section>
    </>
}