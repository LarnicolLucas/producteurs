export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: '',
            data: params.data,
            backgroundColor: params.color
        }]
    };
    return {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                  ticks: {
                    color: params.colorTxt[2]
                  }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                      color: params.colorTxt[2]
                    }
                }
            }
        }
    }
}