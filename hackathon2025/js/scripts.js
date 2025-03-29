// SIDEBAR TOGGLE

var sidebarOpen = false; 
var sidebar = document.getElementById("sidebar"); 

function openSidebar(){
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive"); 
        sidebarOpen = true; 
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive"); 
        sidebarOpen = false
    }
}

// ----------- CHARTS ----------

// -------BAR CHART
var temperaturas = [20.6, 20.6, 20.6, 21, 21.4, 21.8, 22.6, 22.6, 23, 23.4, 23.4, 23.4, 24.1, 25.3, 26.2, 27, 28.5, 28.9]; 
var humedades = [34, 34, 34, 63, 90, 93, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98]; 

var barChartOptions = {
  series: [{
    name: "Temperatura",
    data: temperaturas 
  }, {
    name: "Humedad",
    data: humedades 
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2962ff", 
    "#d50000", 
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%", 
    }
  },
  dataLabels: {
    enabled: false 
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true
      },
    },
  },
  legend: {
    labels: {
      colors: "#262120",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: { 
    categories: ["Área 1", " ", " ", " ", "Área 2", " ", " ", " ",  "Área 3", " ", " "," ",  "Área 4", " ", " ", " ", "Área 5" ],
    title: {
      style: {
        color: "#262120",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#262120",
      },
    },
  },
  yaxis: {
    title: {
      text: "Valor",
      style: {
        color: "#262120",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#262120",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();






//AREA CHART 1

var temperaturas = [ 20.6, 21, 21.4, 21.8, 22.6, 22.6, 23, 23.4, 23.4, 23.4, 24.1, 25.3, 26.2, 27, 28.5, 28.9]; 
var humedades = [34, 34, 34, 63, 90, 93, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98];

var timestamps = [
  "2025-03-29T10:00:00.000Z", "2025-03-29T10:30:00.000Z", "2025-03-29T11:00:00.000Z",
  "2025-03-29T11:30:00.000Z", "2025-03-29T12:00:00.000Z", "2025-03-29T12:30:00.000Z",
  "2025-03-29T13:00:00.000Z", "2025-03-29T13:30:00.000Z", "2025-03-29T14:00:00.000Z",
  "2025-03-29T14:30:00.000Z", "2025-03-29T15:00:00.000Z", "2025-03-29T15:30:00.000Z",
  "2025-03-29T16:00:00.000Z", "2025-03-29T16:30:00.000Z", "2025-03-29T17:00:00.000Z",
  "2025-03-29T17:30:00.000Z", "2025-03-29T18:00:00.000Z", "2025-03-29T18:30:00.000Z"
];


var options  = {
  series: [{
      name: 'Temperatura (°C)',
      data: temperaturas
    }, {
      name: 'Humedad (%)',
      data: humedades
  }],
  chart: {
    height: 300,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: timestamps
  },
  tooltip: {
    x: {
      format: 'dd/MM/yyyy HH:mm'
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//AREA CHART 2

var temperaturas2 = [ 18.2, 19.1, 19.8, 20.5, 21.2, 22.1, 22.5, 23.3, 23.8, 24.1, 24.5, 25.0, 25.5, 26.2, 26.8, 27.4, 28.0, 28.6 ];
var humedades2 = [ 40, 42, 45, 50, 55, 60, 63, 68, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95 ];


var timestamps2 = [
  "2025-03-29T10:00:00.000Z", "2025-03-29T10:30:00.000Z", "2025-03-29T11:00:00.000Z",
  "2025-03-29T11:30:00.000Z", "2025-03-29T12:00:00.000Z", "2025-03-29T12:30:00.000Z",
  "2025-03-29T13:00:00.000Z", "2025-03-29T13:30:00.000Z", "2025-03-29T14:00:00.000Z",
  "2025-03-29T14:30:00.000Z", "2025-03-29T15:00:00.000Z", "2025-03-29T15:30:00.000Z",
  "2025-03-29T16:00:00.000Z", "2025-03-29T16:30:00.000Z", "2025-03-29T17:00:00.000Z",
  "2025-03-29T17:30:00.000Z", "2025-03-29T18:00:00.000Z", "2025-03-29T18:30:00.000Z"
];


var options2  = {
  series: [{
      name: 'Temperatura (°C)',
      data: temperaturas2
    }, {
      name: 'Humedad (%)',
      data: humedades2
  }],
  chart: {
    height: 300,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: timestamps2
  },
  tooltip: {
    x: {
      format: 'dd/MM/yyyy HH:mm'
    },
  },
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();


//AREA CHART 3

var temperaturas3 = [ 15.4, 16.5, 17.3, 18.1, 19.2, 20.3, 21.1, 21.9, 23.0, 24.3, 25.1, 26.2, 27.0, 28.1, 29.4, 30.0, 30.5, 31.0 ];
var humedades3 = [ 60, 58, 55, 52, 50, 48, 46, 44, 42, 40, 38, 35, 32, 30, 28, 26, 25, 23 ];


var timestamps3 = [
  "2025-03-29T10:00:00.000Z", "2025-03-29T10:30:00.000Z", "2025-03-29T11:00:00.000Z",
  "2025-03-29T11:30:00.000Z", "2025-03-29T12:00:00.000Z", "2025-03-29T12:30:00.000Z",
  "2025-03-29T13:00:00.000Z", "2025-03-29T13:30:00.000Z", "2025-03-29T14:00:00.000Z",
  "2025-03-29T14:30:00.000Z", "2025-03-29T15:00:00.000Z", "2025-03-29T15:30:00.000Z",
  "2025-03-29T16:00:00.000Z", "2025-03-29T16:30:00.000Z", "2025-03-29T17:00:00.000Z",
  "2025-03-29T17:30:00.000Z", "2025-03-29T18:00:00.000Z", "2025-03-29T18:30:00.000Z"
];


var options3  = {
  series: [{
      name: 'Temperatura (°C)',
      data: temperaturas3
    }, {
      name: 'Humedad (%)',
      data: humedades3
  }],
  chart: {
    height: 300,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: timestamps3
  },
  tooltip: {
    x: {
      format: 'dd/MM/yyyy HH:mm'
    },
  },
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();



const modal = document.getElementById("account-modal");
const accountButton = document.getElementById("account-button");
const closeButton = document.getElementsByClassName("close-btn")[0];
const logoutButton = document.getElementById("logout-button");
const userNameElement = document.getElementById("user-name");

accountButton.addEventListener("click", () => {
    modal.style.display = "block";
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        userNameElement.textContent = `Bienvenido, ${loggedInUser}`;
    }
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem('loggedInUser');
    modal.style.display = "none";
    // Redirigir a la página de login
    window.location.href = 'login.html';
});

