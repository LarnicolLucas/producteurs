export default function params(params){

    const data = {
        labels: params.legends,
        datasets: [{
            label: "test",
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
          aspectRatio: 2,
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
                  display: false,
                  labels: {
                    color: params.colorTxt[2]
                  }
                }
              }
        }
    }
}