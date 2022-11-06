//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let t2 = mystore_s.t2;
  let t3 = mystore_s.t3;
  let tt = mystore_s.tt;
  let b = mystore_s.b;
  let vid = mystore_s.vid;
  let q = mystore_s.q;
  let hf = mystore_s.hf;
  let x = mystore_s.x;
  let y = mystore_s.y;
  let total_thermal_resistance = mystore_s.total_thermal_resistance;
  let total_thermal_conductivity = mystore_s.total_thermal_conductivity;
  let thermal_resistance_steel = mystore_s.thermal_resistance_steel;
  let thermal_conductivity_steel = mystore_s.thermal_conductivity_steel;
  let thermal_resistance_bakelite = mystore_s.thermal_resistance_bakelite;
  let thermal_conductivity_bakelite = mystore_s.thermal_conductivity_bakelite;
  let thermal_resistance_wood = mystore_s.thermal_resistance_wood;
  let thermal_conductivity_wood = mystore_s.thermal_conductivity_wood;

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t11").innerHTML = t1[0];
  document.getElementById("t12").innerHTML = t1[1];
  document.getElementById("t13").innerHTML = t1[2];
  document.getElementById("t14").innerHTML = t1[3];
  document.getElementById("t15").innerHTML = t1[4];
  document.getElementById("t16").innerHTML = t1[5];
  document.getElementById("t17").innerHTML = t1[6];
  document.getElementById("t18").innerHTML = t1[7];

  document.getElementById("t21").innerHTML = t2[0];
  document.getElementById("t22").innerHTML = t2[1];
  document.getElementById("t23").innerHTML = t2[2];
  document.getElementById("t24").innerHTML = t2[3];
  document.getElementById("t25").innerHTML = t2[4];
  document.getElementById("t26").innerHTML = t2[5];
  document.getElementById("t27").innerHTML = t2[6];
  document.getElementById("t28").innerHTML = t2[7];

  document.getElementById("t31").innerHTML = t3[0];
  document.getElementById("t32").innerHTML = t3[1];
  document.getElementById("t33").innerHTML = t3[2];
  document.getElementById("t34").innerHTML = t3[3];
  document.getElementById("t35").innerHTML = t3[4];
  document.getElementById("t36").innerHTML = t3[5];
  document.getElementById("t37").innerHTML = t3[6];
  document.getElementById("t38").innerHTML = t3[7];

  document.getElementById("tt1").innerHTML = tt[0];
  document.getElementById("tt2").innerHTML = tt[1];
  document.getElementById("tt3").innerHTML = tt[2];
  document.getElementById("tt4").innerHTML = tt[3];
  document.getElementById("tt5").innerHTML = tt[4];
  document.getElementById("tt6").innerHTML = tt[5];
  document.getElementById("tt7").innerHTML = tt[6];
  document.getElementById("tt8").innerHTML = tt[7];

  document.getElementById("b1").innerHTML = b[0];
  document.getElementById("b2").innerHTML = b[1];
  document.getElementById("b3").innerHTML = b[2];
  document.getElementById("b4").innerHTML = b[3];

  document.getElementById("v").innerHTML = vid[0];
  document.getElementById("i").innerHTML = vid[1];

  document.getElementById("thr").innerHTML = total_thermal_resistance;
  document.getElementById("thc").innerHTML = total_thermal_conductivity;
  document.getElementById("sr").innerHTML = thermal_resistance_steel;
  document.getElementById("sc").innerHTML = thermal_conductivity_steel;
  document.getElementById("br").innerHTML = thermal_resistance_bakelite;
  document.getElementById("bc").innerHTML = thermal_conductivity_bakelite;
  document.getElementById("wr").innerHTML = thermal_resistance_wood;
  document.getElementById("wc").innerHTML = thermal_conductivity_wood;

  document.getElementById("q").innerHTML = q;
  document.getElementById("hf").innerHTML = hf;

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
    xaxis: { range: [0, 0.2], title: "Thickness of slab(m)" },
    yaxis: { range: [0, 170], title: "Temperature &deg;C" },
    title: "Thickness of slab vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
