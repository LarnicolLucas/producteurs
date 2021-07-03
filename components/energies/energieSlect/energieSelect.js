import {Link} from 'next/link'
import Card from "../card/card"
import styles from "./energieSelect.module.sass"
import List from "./list"

export default function EnergieSelect(props){
    const listView = List.map(el =>
            <Card key={el.list} src={el.src} title={el.title} description={el.description} color={props.color} link={el.link}/>
    )
    return <>
        <aside className={styles.container}>
            {listView}
        </aside>
    </>
}