export default function CreateDonut(data){
    const dataCutF0 = data.filter(el => el.fields.filiere_de_production != "F0 : Total toutes filières");
    return {
        data: dataCutF0.map(el => el.fields.nombre_points_injection).reverse(),
        legend: dataCutF0.map(el => el.fields.filiere_de_production).reverse()
    }
}