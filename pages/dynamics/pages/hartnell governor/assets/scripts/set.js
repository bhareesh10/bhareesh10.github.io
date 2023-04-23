window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let g = myobj_des.g;
  let s = myobj_des.s;
  let h0 = 96;
  let a = 75;
  let b = 115.5
  let l = 125;
  let r0 = 155;
  let m = 0.3;

  let w = [];
  for (let i = 0; i < 5; i++){
  w[i] = (2*3.14*g[i])/60;
  }

  let r = [];
  for (let i = 0; i < 5; i++){
    r[i] = r0 + (s[i] * (a/b));
    }
  let c = [];
  for (let i = 0; i < 5; i++){
    c[i] = m*Math.pow(w[i],2)*r[i];
    }






  for (let i = 0; i < 5; i++) {
  document.getElementById(`g${i+1}`).innerHTML = g[i];
  document.getElementById(`s${i+1}`).innerHTML = s[i];
  document.getElementById(`r${i+1}`).innerHTML = r[i].toFixed(2);
  document.getElementById(`c${i+1}`).innerHTML = (c[i]/1000).toFixed(2);

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

