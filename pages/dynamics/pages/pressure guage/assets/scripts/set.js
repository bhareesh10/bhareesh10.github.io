window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let a = myobj_des.a;
  let u = myobj_des.u;
  let d = myobj_des.d;




  let v = [];
  for (let i = 0; i < 6; i++){
  v[i] = (u[i] + d[i])/2;
  }


  let e = [];
  for (let i = 0; i < 6; i++){
  e[i] = v[i] - d[i];
  }
  let c = [];
  for (let i = 0; i < 6; i++){
    c[i] = -e[i];
    }
  let g = [];
  for (let i = 0; i < 6; i++){
    g[i] = (-e[i]/v[i])*a[i];
    }
  for (let i = 0; i < 6; i++) {
  document.getElementById(`a${i+1}`).innerHTML = a[i];
  document.getElementById(`u${i+1}`).innerHTML = u[i];
  document.getElementById(`d${i+1}`).innerHTML = d[i];
  document.getElementById(`v${i+1}`).innerHTML = v[i].toFixed(2);
  document.getElementById(`e${i+1}`).innerHTML = e[i].toFixed(2);
  document.getElementById(`c${i+1}`).innerHTML = c[i].toFixed(2);
  document.getElementById(`g${i+1}`).innerHTML = g[i].toFixed(2);

}
var trace1 = {
  x:a ,
  y: u,
  name: 'Upscale',
  type: 'scatter'
};
var trace2 = {
  x: a,
  y: d,
  name: 'Downscale',
  type: 'scatter'
};
 
var data = [trace1, trace2];
var layout = {
  title: {
    text:'Calibration Curve',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Applied Pressure',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Pressure Gauge Indicator',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};
Plotly.newPlot("myPlot", data, layout);
  
 let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

