import styles from './dashboard.module.sass'

import {useState} from 'react'

import YearsSelect from '../yearsSelect/yearsSelect'
import Handler from '../../components/handlerDataView/handlerdataView'
import palette from '../palette/palette'
import Footer from '../footer/footer'

export default function Dashboard(props){

    const fondGraph = {
        background: palette[0],
        color: palette[2]
    };

    const [selectedYear, setSelectedYear] = useState("2021");
    const clickOnYear = (year)=> setSelectedYear(year)

    return <>
        <main className={styles.container}>

            <YearsSelect clickOnYear={clickOnYear} year={selectedYear} />

            <section className={styles.section}>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"graph"} year={selectedYear} />

                </article>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"bar"} year={selectedYear} />

                </article>

            </section>
            <section className={styles.section}>
            
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"donut"} year={selectedYear} />

                </article>
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"donutF5"} year={selectedYear} />

                </article>
            </section>
            <section className={styles.section}>
            
                <article style={fondGraph} className={styles.graphContainer}>

                    <Handler type={props.type} items={"donutByPower"} year={selectedYear} />

                </article>
            </section>
            
            <Footer />
        </main>
    </>
}