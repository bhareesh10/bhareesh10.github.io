window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let l = myobj_des.l;
  let t = myobj_des.t;
  let g = 78.48*Math.pow(10,9);
  let p = 1.029*Math.pow(10,-11);
  let d = 0.0182;


  let k = [];
  for (let i = 0; i < 3; i++){
  k[i] = (g*p*100)/l[i];
  }


  let ttt = [];
  for (let i = 0; i < 3; i++){
  ttt[i] = (2*3.14*Math.pow(d/k[i],1/2));
  }
  let ft = [];
  for (let i = 0; i < 3; i++){
    ft[i] =(1/ttt[i]);
    }
  let te = [];
  for (let i = 0; i < 3; i++){
    te[i] = (t[i]/10);
    }
  let fe = [];
  for (let i = 0; i < 3; i++){
    fe[i] =(1/te[i]);
    }






  for (let i = 0; i < 3; i++) {

  document.getElementById(`l${i+1}`).innerHTML = (l[i]/100).toFixed(2);
  document.getElementById(`t${i+1}`).innerHTML = t[i].toFixed(2);
  document.getElementById(`k${i+1}`).innerHTML = k[i].toFixed(2);
  document.getElementById(`ttt${i+1}`).innerHTML = ttt[i].toFixed(2);
  document.getElementById(`ft${i+1}`).innerHTML = ft[i].toFixed(2);
  document.getElementById(`te${i+1}`).innerHTML = te[i].toFixed(2);
  document.getElementById(`fe${i+1}`).innerHTML = fe[i].toFixed(2);


}
let xArray = ghh;
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

