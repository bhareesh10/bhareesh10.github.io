window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let t1 = myobj_des.t1;
  let vid = myobj_des.vi;
  let xi = [10,40,160,210,280];
  let v = vid[0];
  let i = vid[1];
  let mf = vid[2]*(0.001)/60;
  let a = (3.14  * Math.pow(0.02,2))/4;
  let mw = (mf/60)* Math.pow(10,3);
  let dtdx = -(t1[2] - t1[3])/(xi[2]-xi[3]);
  let dt = dtdx *1000;
  let kk = (mf * 4187*(t1[10]-t1[9]))/(a*dt);
  let k =parseFloat(kk.toFixed(2));
  store.t1 = t1;
  store.vid = vid;
  store.k = k;
  document.getElementById("thr").innerHTML =k;
  var xArray = xi;
  var yArray = t1
  var data = [
    {
      x: xArray,
      y: yArray,
      mode: "lines",
    },
  ];
  store.x = xArray;
  store.y = yArray;
  // Define Layout
  var layout = {
    xaxis: {  title: "Length(cm)" },
    yaxis: {  title: "temperature&deg;C" },
    title: "Length vs. Temperature",
  };
  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}