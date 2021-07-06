import styles from './nav.module.sass'
import list from '../energies/energieSlect/list'
import Pins from '../pins/pins'
import palette from '../palette/palette'

export default function Nav(props){

    const style={
        background: palette[0]
    }

    const elems = list.map(el => <Pins 
        key={el.id} 
        src={el.src} 
        title={el.title} 
        description={el.description} 
        color={palette} 
        link={el.link}
        selected={props.type == el.link ? true : false}
    />)

    return <>
        <aside style={style} className={styles.container}>

            {elems}

        </aside>
    </>
}