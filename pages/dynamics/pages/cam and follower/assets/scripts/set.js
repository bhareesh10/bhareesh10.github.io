window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let d = myobj_des.d;
  let s = 0;

  let k = [];
  for (let i = 0; i < 19; i++){
  k[i] = s ;
  s = s+20;
  }






  for (let i = 0; i < 19; i++) {
  document.getElementById(`k${i+1}`).innerHTML = k[i];
  document.getElementById(`d${i+1}`).innerHTML = d[i];

}

let xArray = d;
let yArray = k;
var data = [
  {
    x: xArray,
    y: yArray,
    mode: "lines",
  },
];

// Define Layout
var layout = {
  xaxis: {  title: "Displacement of Follower(mm)" },
  yaxis: {  title: "Angular Displacement" },
  title: "Displacement of Follower(mm) vs Angular Displacement",
};

Plotly.newPlot("myPlot", data, layout);



  



  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

