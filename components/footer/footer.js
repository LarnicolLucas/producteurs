import styles from './footer.module.sass'
import SocialMedia from '../socialMedia/socialMedia'
import palette from '../palette/palette'

export default function Footer(props){
    
    const style={
        background: palette[0]
    };

    return <>
        <footer style={style} className={styles.container}>
            <SocialMedia />
        </footer>
    </>
}