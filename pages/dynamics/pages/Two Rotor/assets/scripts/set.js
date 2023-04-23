window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let w = myobj_des.w;
  let t = myobj_des.t;
  let g = 78.48*Math.pow(10,9);
  let p = 1.029*Math.pow(10,-11);
  let d = 0.0182;
  let l=0.99;
  let ma=2.885;
  let da=0.225;
  let mb=2.09;
  let db=0.190;
  let r=0.16;


  let k = [];
  for (let i = 0; i < 4; i++){
  k[i] = (g*p)/l;
  }

  let ia = [];
  for(let i=0; i< 4; i++){
    ia[i] =ma*(Math.pow(da,2)/8)
  }

  let ib = [];
  for(let i=0; i< 4; i++){
    ib[i] =(mb*(Math.pow(db,2)/8))+(2*(w[i])/1000)*((Math.pow(r,2))/8)
  }


  let ttt = [];
  for (let i = 0; i < 4; i++){
  ttt[i] = (2*3.14*Math.pow((ia[i]*ib[i])/(k[i]*(ia[i]+ib[i])),1/2));
  }

  let ft = [];
  for (let i = 0; i < 4; i++){
    ft[i] =(1/ttt[i]);
    }

  let te = [];
  for (let i = 0; i < 4; i++){
    te[i] = (t[i]/10);
    }

  let fe = [];
  for (let i = 0; i < 4; i++){
    fe[i] =(1/te[i]);
    }






  for (let i = 0; i < 4; i++) {

  document.getElementById(`w${i+1}`).innerHTML = (w[i]/1000).toFixed(3);
  document.getElementById(`t${i+1}`).innerHTML = t[i].toFixed(3);
  document.getElementById(`ia${i+1}`).innerHTML = ia[i].toFixed(3);
  document.getElementById(`ib${i+1}`).innerHTML = ib[i].toFixed(3);
  document.getElementById(`k${i+1}`).innerHTML = k[i].toFixed(3);
  document.getElementById(`ttt${i+1}`).innerHTML = ttt[i].toFixed(3);
  document.getElementById(`ft${i+1}`).innerHTML = ft[i].toFixed(3);
  document.getElementById(`te${i+1}`).innerHTML = te[i].toFixed(3);
  document.getElementById(`fe${i+1}`).innerHTML = fe[i].toFixed(3);


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

