$(function(){
  var data = {
    labels: [
      'Scala',
      'Rust',
      'Haskell',
      'C#',
      'Java',
      '人間性'
    ],
    datasets: [{
      backgroundColor: ["#3F51B5", "#F44336", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63"],
      data: [40, 30, 20, 8, 2]
    }]
  };

  var ctx = $('#profileChart').get(0).getContext("2d");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      pieceLabel: {
        render: 'label',
        position: 'outside'
      }
    }
  }
  );
})
