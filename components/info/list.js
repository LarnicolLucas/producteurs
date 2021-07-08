import palette from "../palette/palette";

const list = [
    {
        id: 0, 
        src: "/images/block/0.svg", 
        titre: "Lisibilité", 
        description1: "Les données sont traités de façon la plus clair possible afin d'exploiter la mise à disposition libre d'ENEDIS",
        description2: "Les graphiques, diagrammes circulaires et diagrammes en batons vous aidrons à trouver l'information que vous rechercher",
        color: palette[4],
        txt2Color: palette[2]
    },
    {
        id: 1, 
        src: "/images/block/1.svg", 
        titre: "Open Data", 
        description1: "Les données exploité sont issus du site officiel d'ENEDIS open DATA qui permet la ré-utilisation des données numériques",
        description2: "L'exploitation est permise grace à la license libre",
        color: palette[3],
        txt2Color: palette[2]
    }
];

export default list