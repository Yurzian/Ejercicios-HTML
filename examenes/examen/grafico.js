var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Notas medias",
        data: [8.7, 9, 9.4, 9.7, 8.6, 9, 8.3],
        backgroundColor: "rgba(153,205,1,0.6)",
      },
    ],
  },
});