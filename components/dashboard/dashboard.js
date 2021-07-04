import styles from './dashboard.module.sass'
import Handler from '../../components/handlerDataView/handlerdataView'
import palette from '../palette/palette'

export default function Dashboard(props){

    const fondGraph = {
        background: palette[4]
    }

    return <>
        <main className={styles.container}>
            <section className={styles.section}>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"graph"} />

                </article>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"bar"} />

                </article>

            </section>
            <section className={styles.section}>
            
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"donut"} />

                </article>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"donutF5"} />

                </article>
            </section>
        </main>
    </>
}