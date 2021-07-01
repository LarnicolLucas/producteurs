export default function Createlist(data){
    return {
        data: data.map(el => el.fields.nombre_points_injection).reverse(),
        legend: data.map(el => el.fields.date).reverse()
    }
}