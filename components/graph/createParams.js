export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: params.label,
            data: params.data,
            borderColor: params.color[0],
            backgroundColor: params.color[0],
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
                    color: params.colorTxt[2]
                  }
                },
                y: {
                    ticks: {
                      color: params.colorTxt[2]
                    }
                }
            },
            plugins : {
                title:{
                  color: params.colorTxt[2]
                },
                legend: {
                  labels: {
                    color: params.colorTxt[2]
                  }
                }
              }
        }
    }
}