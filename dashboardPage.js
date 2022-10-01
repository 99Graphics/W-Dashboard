signInFalse()

$(document).ready(function () {
  $(".more-slider").owlCarousel({
    loop: true,
    items: 3,
    center: false,
    freeDrag: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    navigation: false,
    dots: false,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 25,
        margin: 10,
        nav: false,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
        nav: false,
      },
    },
  });
});

let chartWrap = document.querySelector(".chart-js-wrapper");
chartWrap.innerHTML = `<canvas id="chart-line"></canvas>`;
var ctx1 = document.getElementById("chart-line").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
      {
        label: "BITCOIN",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#fff",
        backgroundColor: "#fff",
        borderWidth: 3,
        fill: false,
        showLine: true,
        data: [0, 850, 150, 1250, 550, 1800],
        maxBarThickness: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: false,
          padding: 10,
          color: "#000",
          font: {
            size: 11,
            family: "Open Sans",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: false,
          color: "#000",
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
    },
  },
});

const dashSendBtn = document.querySelector(".dash-send-btn");
const dashReceiveBtn = document.querySelector(".dash-receive-btn");
const dashEarnBtn = document.querySelector(".dash-earn-btn");

dashSendBtn.addEventListener("click", () => {
  localStorage.setItem("sendBol", true);
  localStorage.setItem("receiveBol", false);
  localStorage.setItem("earnBol", false);
});

dashReceiveBtn.addEventListener("click", () => {
  localStorage.setItem("sendBol", false);
  localStorage.setItem("receiveBol", true);
  localStorage.setItem("earnBol", false);
});
dashEarnBtn.addEventListener("click", () => {
  localStorage.setItem("sendBol", false);
  localStorage.setItem("receiveBol", false);
  localStorage.setItem("earnBol", true);
});

