window.Chart.defaults.global.defaultFontColor = 'rgba(239, 192, 86, 1)';

window.graphic = {
    myChart : (lolChart, etiquetas, champGraphic, champGraphicStats)=>{ 
        new window.Chart(lolChart, {
      type: 'bar',
      data:{
        labels: etiquetas,
        datasets:[
          {
            label: '',
            data: champGraphic,
            backgroundColor: [
                  'rgba(243, 111, 41, 0.5)',
                  'rgba(243, 64, 170, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)'
              ],
              borderColor: [
                  'rgba(239, 192, 86, 1)',
                  'rgba(243, 64, 170, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    })
}


}


  
  