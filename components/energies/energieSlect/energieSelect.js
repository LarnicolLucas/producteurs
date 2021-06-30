import Card from "../card/card"
import styles from "./energieSelect.module.sass"

export default function EnergieSelect(props){
    const list = [
        {id: 0, src: "/images/icons_producteurs/eolienne.svg", title: "Eolien", description: "Client diposant d'un moyen de production de type éolien."},
        {id: 1, src: "/images/icons_producteurs/hydrolique.svg", title: "Hydrolique", description: "Point de production au moyen d'un générateur hydrolique"},
        {id: 2, src: "/images/icons_producteurs/solaire.svg", title: "Solaire", description: "Client possédant des panneaux solaires raccordé au réseau"},
        {id: 3, src: "/images/icons_producteurs/thermique.svg", title: "Thermique", description: "Centrale de production thermiques vapeur, combustion etc..."},
        {id: 4, src: "/images/icons_producteurs/bioenergie.svg", title: "Bioénergie", description: "Client utilisant des centrales de production bioénergetique"}
    ].map(el => <Card key ={el.id} src={el.src} title={el.title} description={el.description} color={props.color}/>)
    return <>
        <aside className={styles.container}>
            {list}
        </aside>
    </>
}