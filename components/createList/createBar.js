export default function CreateBar(data){
    const addListItem = data.map(el => Object.assign({}, el, {listItem: el.fields.plage_de_puissance_injection.split(" : ")[0].slice(1)}));
    const orderedArray = addListItem.sort((itemA, itemB) => itemA.listItem > itemB.listItem ? -1 : 1);
    const dataCutF0 = orderedArray.filter(el => el.fields.plage_de_puissance_injection != "P0 : Total toutes puissances");
    return {
        data: dataCutF0.map(el => el.fields.nombre_points_injection).reverse(),
        legend: dataCutF0.map(el => el.fields.plage_de_puissance_injection).reverse()
    }
}