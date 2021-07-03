export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: params.label,
            data: params.data,
            backgroundColor: params.color
        }]
    };
    return {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                  ticks: {
                    color: params.color[2]
                  }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                      color: params.color[2]
                    }
                }
            },
            plugins : {
                title:{
                  color: params.color[2]
                },
                legend: {
                  labels: {
                    color: params.color[2]
                  }
                }
              }
        }
    }
}