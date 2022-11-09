//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.tt;
  let vi = mystore_s.vi;
  let to = mystore_s.tto;
  let ti = mystore_s.tti;
  let k = mystore_s.ttk;
  let q = mystore_s.qq;
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
  document.getElementById("t9").innerHTML = t1[5];
  document.getElementById("t10").innerHTML = t1[6];
  document.getElementById("t11").innerHTML = t1[7];
  document.getElementById("t12").innerHTML = t1[7];

  

  document.getElementById("v").innerHTML = vi[0];
  document.getElementById("i").innerHTML = vi[1];
  document.getElementById("q").innerHTML = q;

  document.getElementById("k").innerHTML = k;
  

  document.getElementById("q").innerHTML = q;
 
  document.getElementById("ti").innerHTML = ti;
  document.getElementById("to").innerHTML = to;

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
    xaxis: { range: [0, 0.2], title: "Radius of sphere(m)" },
    yaxis: { range: [0, 170], title: "Temperature &deg;C" },
    title: "Radius of sphere vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
