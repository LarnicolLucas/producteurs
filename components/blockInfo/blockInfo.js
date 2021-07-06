import styles from './blockInfo.module.sass'

export default function blockInfo(props){

    const style= {
        background: props.data.color
    }

    const secondaryTextStyle= {
        color: props.data.txt2Color
    }
    
    return <>
        <section style={style} className={styles.container}>

            <figure className={styles.figure}>
                <img className={styles.img} src={props.data.src} />
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