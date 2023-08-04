(function (jQuery) {
  "use strict";
  if (jQuery("#myChart").length) {
    const options = {
      series: [55, 75],
      chart: {
        height: 230,
        type: "radialBar",
      },
      colors: ["#4bc7d2", "#3a57e8"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "50%",
          },
          track: {
            margin: 10,
            strokeWidth: "50%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: ["Apples", "Oranges"],
    };
    if (ApexCharts !== undefined) {
      var chart = new ApexCharts(document.querySelector("#myChart"), options);
      chart.render();
    }
  }
  if (jQuery("#d-activity").length) {
    const options = {
      series: [
        {
          name: "Successful deals",
          data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35],
        },
        {
          name: "Failed deals",
          data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55],
        },
      ],
      chart: {
        type: "bar",
        height: 230,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3a57e8", "#4bc7d2"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#d-activity"),
      options
    );
    chart.render();
  }
  if (jQuery("#d-main").length) {
    const options = {
      series: [
        {
          name: "total",
          data: [94, 80, 94, 80, 94, 80, 94],
        },
        {
          name: "pipline",
          data: [72, 60, 84, 60, 74, 60, 78],
        },
      ],
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        height: 245,
        type: "area",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: ["#3a57e8", "#4bc7d2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false, //or just here to disable only x axis grids
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: ["#3a57e8", "#4bc7d2"],
        },
      },
      tooltip: {
        enabled: true,
      },
    };

    var chart = new ApexCharts(document.querySelector("#d-main"), options);
    chart.render();
  }
  if ($(".d-slider1").length > 0) {
    const options = {
      centeredSlides: false,
      loop: false,
      slidesPerView: 4,
      autoplay: false,
      spaceBetween: 32,
      breakpoints: {
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
        1500: { slidesPerView: 5 },
        1920: { slidesPerView: 6 },
        2040: { slidesPerView: 7 },
        2440: { slidesPerView: 8 },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    };
    let swiper = new Swiper(".d-slider1", options);

    document.addEventListener("ChangeMode", (e) => {
      if (e.detail.rtl === "rtl" || e.detail.rtl === "ltr") {
        swiper.destroy(true, true);
        setTimeout(() => {
          swiper = new Swiper(".d-slider1", options);
        }, 500);
      }
    });
  }

  if (jQuery(".d-slider2").length > 0) {
    const options = {
      centeredSlides: false,
      loop: false,
      slidesPerView: 7,
      autoplay: false,
      spaceBetween: 40,
      breakpoints: {
        320: { slidesPerView: 2 },
        550: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
        1500: { slidesPerView: 6 },
        1920: { slidesPerView: 7 },
        2040: { slidesPerView: 7 },
        2440: { slidesPerView: 8 },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    };
    new Swiper(".d-slider2", options);
  }

  if (jQuery(".d-slider3").length > 0) {
    const options = {
      centeredSlides: false,
      loop: true,
      slidesPerView: 6,
      autoplay: false,
      spaceBetween: 32,
      grid: {
        rows: 2,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1400: { slidesPerView: 3 },
        1500: { slidesPerView: 3 },
        1920: { slidesPerView: 3 },
        2040: { slidesPerView: 3 },
        2440: { slidesPerView: 3 },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    };
    new Swiper(".d-slider3", options);
  }

  if (jQuery(".d-slider4").length > 0) {
    const options = {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      autoplay: false,
      spaceBetween: 32,
      breakpoints: {
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1400: { slidesPerView: 2 },
        1500: { slidesPerView: 3 },
        1920: { slidesPerView: 3 },
        2040: { slidesPerView: 3 },
        2440: { slidesPerView: 3 },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    };
    new Swiper(".d-slider4", options);
  }

  if (jQuery(".d-slider5").length > 0) {
    const options = {
      centeredSlides: false,
      loop: false,
      slidesPerView: 6,
      autoplay: false,
      spaceBetween: 32,
      grid: {
        rows: 2,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
        1500: { slidesPerView: 3 },
        1920: { slidesPerView: 3 },
        2040: { slidesPerView: 3 },
        2440: { slidesPerView: 3 },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    };
    new Swiper(".d-slider5", options);
  }

  if (jQuery("#admin-chart-02").length) {
    var options = {
      series: [
        {
          data: data.slice(),
        },
      ],
      chart: {
        id: "realtime",
        height: 350,
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Dynamic Updating Chart",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        range: XAXISRANGE,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#admin-chart-02"),
      options
    );
    chart.render();

    window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });

      chart.updateSeries([
        {
          data: data,
        },
      ]);
    }, 1000);
  }
})(jQuery);