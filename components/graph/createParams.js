export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: params.label,
            data: params.data,
            borderColor: params.color,
            backgroundColor: params.color,
            tension: 0.5
        }]
    };
    return {
        type: 'line',
        data: data
    }
}