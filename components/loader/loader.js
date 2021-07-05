import styles from './loader.module.sass'
import palette from '../palette/palette'

export default function Loader(props){
    const background = {background: palette[3]}
    return <>
        <div className={styles["lds-ellipsis"]}>
            <div style={background} className={styles.div}></div>
            <div style={background} className={styles.div}></div>
            <div style={background} className={styles.div}></div>
            <div style={background} className={styles.div}></div>
        </div>
    </>
}