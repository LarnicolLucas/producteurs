import styles from './info.module.sass'
import palette from '../palette/palette'
import BlockInfo from '../blockInfo/blockInfo'
import list from './list'


export default function Info(props){
    const styleSpan = {
        color: palette[3]
    };

    const blocks = list.map(el => <BlockInfo key={el.id} data={el} />);

    return <>
        <section className={styles.container}>

            <header className={styles.header}>
                <h3> Analysez simplement les <span style={styleSpan}><strong>données</strong></span></h3>
            </header>

            <main className={styles.containerBlock}>
                {blocks}
            </main>
            
        </section>
    </>
}