export default function Createlist(data){
    return data.map(el => { return{
        id: el.recordid,
        data: el.fields.nombre_points_injection,
        legend: el.fields.date
    }})
}