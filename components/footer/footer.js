import styles from './footer.module.sass'
import SocialMedia from '../socialMedia/socialMedia'

export default function Footer(props){
    
    return <>
        <footer className={styles.container}>
            <SocialMedia />
        </footer>
    </>
}