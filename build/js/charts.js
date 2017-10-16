// Line alertsChart
if ($('#alertsChart').length ){
  var ctx = document.getElementById("alertsChart");
  var alertsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["25.09.2017", "26.09.2017", "27.09.2017", "28.09.2017", "29.09.2017", "30.09.2017", "01.10.2017"],
    datasets: [{
    label: "Alerts",
    backgroundColor: "rgba(38, 185, 154, 0.31)",
    borderColor: "rgba(38, 185, 154, 0.7)",
    pointBorderColor: "rgba(38, 185, 154, 0.7)",
    pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(151,187,205,1)",
    pointBorderWidth: 1,
    data: [3100, 7400, 600, 3900, 2000, 8500, 700]
    }, {
    label: "Transactions",
    backgroundColor: "rgba(3, 88, 106, 0.3)",
    borderColor: "rgba(3, 88, 106, 0.70)",
    pointBorderColor: "rgba(3, 88, 106, 0.70)",
    pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(151,187,205,1)",
    pointBorderWidth: 1,
    data: [8200, 2300, 6600, 900, 9900, 400, 200]
    }]
  },
  });
}

// Line casesChart
if ($('#casesChart').length ){
  var ctx = document.getElementById("casesChart");
  var alertsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["25.09.2017", "26.09.2017", "27.09.2017", "28.09.2017", "29.09.2017", "30.09.2017", "01.10.2017"],
    datasets: [{
    label: "Alerts",
    backgroundColor: "rgba(38, 185, 154, 0.31)",
    borderColor: "rgba(38, 185, 154, 0.7)",
    pointBorderColor: "rgba(38, 185, 154, 0.7)",
    pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(151,187,205,1)",
    pointBorderWidth: 1,
    data: [3100, 7400, 600, 3900, 2000, 8500, 700]
    }, {
    label: "Transactions",
    backgroundColor: "rgba(3, 88, 106, 0.3)",
    borderColor: "rgba(3, 88, 106, 0.70)",
    pointBorderColor: "rgba(3, 88, 106, 0.70)",
    pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(151,187,205,1)",
    pointBorderWidth: 1,
    data: [8200, 2300, 6600, 900, 9900, 400, 200]
    }]
  },
  });
}
