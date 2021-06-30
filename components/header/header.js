import styles from './header.module.sass'
import Logo from './logo/logo'
import Content from './content/content'



export default function Header(props){
    return <>
        <header className={styles.container}>

            <Logo />
            <Content data={props.data}/>

        </header>
    </>
}