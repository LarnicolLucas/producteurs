import styles from './nav.module.sass'
import list from '../energies/energieSlect/list'
import Pins from '../pins/pins'
import palette from '../palette/palette'

export default function Nav(props){

    const newList = list.map(el => Object.assign({}, el, {src: "/images/icons_producteurs/aside/"+el.src.split('/')[3]}));

    const style={
        background: palette[4]
    }

    const elems = newList.map(el => <Pins 
        key={el.id} 
        src={el.src} 
        title={el.title} 
        description={el.description} 
        color={palette} 
        link={el.link}
    />)

    return <>
        <aside style={style} className={styles.container}>

            {elems}

        </aside>
    </>
}