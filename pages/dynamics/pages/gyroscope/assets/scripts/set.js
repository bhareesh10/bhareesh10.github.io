window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let s = myobj_des.s;
  let a = myobj_des.a;
  let c = myobj_des.c;
  let p = myobj_des.p;
  let t = myobj_des.t;

  let w = [];
  for (let i = 0; i < 10; i++){
  w[i] = (2*3.14*s[i])/60;
  }


  let wp = [];
  for (let i = 0; i < 10; i++){
  wp[i] = (p[i]/t[i])*0.017;
  }


  let f = [];
  for (let i = 0; i < 10; i++){
  f[i] = a[i]*c[i];
  }

  let g = [];
  for (let i = 0; i < 10; i++){
  g[i] = 0.8*w[i]*wp[i];
  }









  for (let i = 0; i < 10; i++) {
  document.getElementById(`s${i+1}`).innerHTML = s[i];
  document.getElementById(`a${i+1}`).innerHTML = a[i];
  document.getElementById(`c${i+1}`).innerHTML = c[i];
  document.getElementById(`p${i+1}`).innerHTML = p[i].toFixed(2);
  document.getElementById(`t${i+1}`).innerHTML = t[i].toFixed(2);
  document.getElementById(`wp${i+1}`).innerHTML =wp[i].toFixed(2);
  document.getElementById(`w${i+1}`).innerHTML = w[i].toFixed(2);
  document.getElementById(`f${i+1}`).innerHTML = f[i].toFixed(2);
  document.getElementById(`g${i+1}`).innerHTML = g[i].toFixed(2);

}
let xArray = g;
let yArray = s;
var data = [
  {
    x: xArray,
    y: yArray,
    mode: "lines",
  },
];

// Define Layout
var layout = {
  xaxis: {  title: "Speed (N) rpm" },
  yaxis: {  title: "Sleeve displacement (X) mm" },
  title: "Speed vs Sleeve displacement",
};
let xx = c;
let yy = r;
var data1 = [
  {
    x: xx,
    y: yy,
    mode: "lines",
  },
];

// Define Layout
var layout1 = {
  xaxis: {  title: "Controlling force(N)" },
  yaxis: {  title: "Radius of rotation (r) mm" },
  title: "Controlling force(N) vs Radius of rotation (r) mm",
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
Plotly.newPlot("myPlot1", data1, layout1);

  



  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

