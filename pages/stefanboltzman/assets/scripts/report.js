//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t = mystore_s.t;
  let t2 = mystore_s.t1;
  let ti = mystore_s.ti;
  let sig = mystore_s.sig;
  let x1 = mystore_s.x;
  let y1 = mystore_s.y;
  

 
  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("tt11").innerHTML = t[0];
  document.getElementById("tt12").innerHTML = t[1];
  document.getElementById("tt13").innerHTML = t[2];
  document.getElementById("tt14").innerHTML = t[3];
  
  document.getElementById("t1").innerHTML = t2[0];
  document.getElementById("t2").innerHTML = t2[1];
  document.getElementById("t3").innerHTML = t2[2];
  document.getElementById("t4").innerHTML = t2[3];
  document.getElementById("t5").innerHTML = t2[4];
  document.getElementById("t6").innerHTML = t2[5];
  document.getElementById("t7").innerHTML = t2[6];
  document.getElementById("t8").innerHTML = t2[7];
  document.getElementById("t9").innerHTML = t2[8];
  document.getElementById("t10").innerHTML = t2[9];
  document.getElementById("t11").innerHTML = t2[10];
  document.getElementById("t12").innerHTML = t2[11];


  document.getElementById("ti1").innerHTML = ti[0];
  document.getElementById("ti2").innerHTML = ti[1];
  document.getElementById("ti3").innerHTML = ti[2];
  document.getElementById("ti4").innerHTML = ti[3];
  document.getElementById("ti5").innerHTML = ti[4];
  document.getElementById("ti6").innerHTML = ti[5];
  document.getElementById("ti7").innerHTML = ti[6];
  document.getElementById("ti8").innerHTML = ti[7];
  document.getElementById("ti9").innerHTML = ti[8];
  document.getElementById("ti10").innerHTML = ti[9];
  document.getElementById("ti11").innerHTML = ti[10];
  document.getElementById("ti12").innerHTML = ti[11];


  document.getElementById("thr").innerHTML = sig;




  
  

  var xArray = x1;
  var yArray = y1;
  var data = [
    {
      x: xArray,
      y: yArray,
      mode: "lines",
    },
  ];

  var layout = {
    xaxis: { range: [0, 150], title: "time(sec)" },
    yaxis: { range: [0, 50], title: "Temperature &deg;c" },
    title: "Time vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
