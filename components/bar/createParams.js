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
                    color: params.colorTxt[2]
                  }
                },
                y: {
                    beginAtZero: true,
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