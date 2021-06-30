import Card from "../card/card"
import styles from "./energieSelect.module.sass"

export default function EnergieSelect(props){
    const list = [
        {id: 0, src: "/images/icons_producteurs/eolienne.svg", title: "Eolien"},
        {id: 1, src: "/images/icons_producteurs/hydrolique.svg", title: "Hydrolique"},
        {id: 2, src: "/images/icons_producteurs/solaire.svg", title: "Solaire"},
        {id: 3, src: "/images/icons_producteurs/thermique.svg", title: "Thermique"},
        {id: 4, src: "/images/icons_producteurs/bioenergie.svg", title: "Bioénergie"}
    ].map(el => <Card key ={el.id} src={el.src} title={el.title}/>)
    return <>
        <aside className={styles.container}>
            {list}
        </aside>
    </>
}