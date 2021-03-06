export default function params(params, ctx){

  const padding= 25;

    const data = {
        labels: params.legends,
        datasets: [{
            label: params.label,
            data: params.data,
            backgroundColor: params.color,
            hoverOffset: padding
        }]
    };
    let delayed;
    return {
        type: 'doughnut',
        data: data,
        options: {
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
            scales: {
              x: {
                display: false
              },
              y: {
                display: false
              }
            },
            plugins : {
              title:{
                color: params.colorTxt[2]
              },
              legend: {
                labels: {
                  color: params.colorTxt[2]
                },
                position: "right"
              }
            },
            aspectRatio: 2,
            layout: {
              padding: padding
            }
          }
    }
}