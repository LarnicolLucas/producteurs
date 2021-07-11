import styles from './mobilNavBar.module.sass'
import list from '../energies/energieSlect/list'
import palette from '../palette/palette'
import PinsMobileNavBAr from '../pinsMobilNavBar/pinsMobilNavBar'
import Image from 'next/image'

export default function MobileNavBAr(props){

    const asideButton = list.map(el => <PinsMobileNavBAr 
        key={el.id} 
        src={el.src} 
        title={el.title} 
        color={palette} 
        link={el.link}
        selected={props.type == el.link ? true : false}
    />);

    const menuOpen = {
        maxWidth: props.navMenu ? "100%" : "0"
    }

    return <>

        <aside style={menuOpen} className={styles.container} onClick={props.closeMenu}>
            {asideButton}
            <figure className={styles.figure}>
                <div className={styles.img}>
                    <Image src="/images/navMobile/close.svg" alt='Icon of Energie' layout="fill" />
                </div>
            </figure>
        </aside>

    </>
}