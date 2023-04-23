//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let vid = mystore_s.vid;
  let k = mystore_s.k;
  let x = mystore_s.x;
  let y = mystore_s.y;

  
  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t1").innerHTML = t1[0];
  document.getElementById("t2").innerHTML = t1[1];
  document.getElementById("t3").innerHTML = t1[2];
  document.getElementById("t4").innerHTML = t1[3];
  document.getElementById("t5").innerHTML = t1[4];
  document.getElementById("t6").innerHTML = t1[5];
  document.getElementById("t7").innerHTML = t1[6];
  document.getElementById("t8").innerHTML = t1[7];
  document.getElementById("t9").innerHTML = t1[8];
  document.getElementById("t10").innerHTML = t1[9];
  document.getElementById("t11").innerHTML = t1[10];

  document.getElementById("v").innerHTML = vid[0];
  document.getElementById("i").innerHTML = vid[1];
  document.getElementById("r").innerHTML = vid[2];
  

  document.getElementById("thc").innerHTML = k;
  

  var xArray = x;
  var yArray = y;
  var data = [
    {
      x: xArray,
      y: yArray,
      mode: "lines",
    },
  ];

  var layout = {
    xaxis: {  title: "Length(cm)" },
    yaxis: {  title: "temperature&deg;C" },
    title: "Length vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
