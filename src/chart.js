window.Chart.defaults.global.defaultFontColor = 'rgba(239, 192, 86, 1)';
window.Chart.defaults.global.defaultFontSize = 30;


window.graphic = {
    myChart : (lolChart, etiquetas, champGraphic)=>{ 
        new window.Chart(lolChart, {
      type: 'bar',
      data:{
        labels: etiquetas,
        datasets:[
          {
            label: '',
            data: champGraphic,
            backgroundColor: [
                'rgba(243, 64, 170, 0.7)',
                'rgba(118, 68, 138, 0.7)',
                'rgba(36, 113, 163, 0.7)',
                'rgba(39, 174, 96, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(243, 64, 170, 1)',
                  'rgba(118, 68, 138, 1)',
                  'rgba(36, 113, 163, 1)',
                  'rgba(39, 174, 96, 1)',
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


  
  