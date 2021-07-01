export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: params.label,
            data: params.data,
            borderColor: params.color[3],
            backgroundColor: params.color[3],
            tension: 0.5
        }]
    };
    return {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                  ticks: {
                    color: params.color[2]
                  }
                },
                y: {
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