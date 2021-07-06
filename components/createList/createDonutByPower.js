export default function CreateDonutByPower(data){
    const addListItem = data.map(el => Object.assign({}, el, {listItem: el.fields.plage_de_puissance_injection.split(" : ")[0].slice(1)}));
    const orderedArray = addListItem.sort((itemA, itemB) => itemA.listItem > itemB.listItem ? -1 : 1);
    return {
        data: orderedArray.map(el => el.fields.nombre_points_injection).reverse(),
        legend: orderedArray.map(el => el.fields.plage_de_puissance_injection).reverse()
    }
}