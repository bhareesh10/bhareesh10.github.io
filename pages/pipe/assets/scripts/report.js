//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  
  let vi = mystore_s.b;
  let q = mystore_s.q;
  let tti = mystore_s.ti;
  let ttm = mystore_s.tm;
  let tto = mystore_s.to;
  let k = mystore_s.k;
  let k1 = mystore_s.k1;
  let k2 = mystore_s.k2;
  let x = mystore_s.x;
  let y = mystore_s.y;
  
  let ti = parseFloat(tti.toFixed(2));
  let tm = parseFloat(ttm.toFixed(2));
  let to = parseFloat(tto.toFixed(3));
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
  
  document.getElementById("k1").innerHTML = k1;
  document.getElementById("k2").innerHTML = k2;
  document.getElementById("q").innerHTML = q;
 
  document.getElementById("ti").innerHTML = ti;
  document.getElementById("tm").innerHTML = tm;
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
    xaxis: { range: [0, 0.5], title: "radius(m)" },
    yaxis: { range: [0, 170], title: "temperature &deg;C" },
    title: "Radius vs. temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
