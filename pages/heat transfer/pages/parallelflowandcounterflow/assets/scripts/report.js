//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let qph = mystore_s.qph;
  let qpc = mystore_s.qpc;
  let tmtdp = mystore_s.tmtdp;
  let upo = mystore_s.upo;
  let upi = mystore_s.upi;
  let ep = mystore_s.ep;
  let qch = mystore_s.qch;
  let qcc = mystore_s.qcc;
  let tmtdc = mystore_s.tmtdc;
  let uco = mystore_s.uco;
  let uci = mystore_s.uci;
  let ec = mystore_s.ec;
  let tph = mystore_s.tph;
  let tpc = mystore_s.tpc;
  let tch = mystore_s.tch;
  let tcc = mystore_s.tcc;
  let mp1 = mystore_s.mp1;
  let mp2 = mystore_s.mp2;
  


  

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("mph").innerHTML = mp1[0];
  document.getElementById("mpc").innerHTML = mp1[1];
  document.getElementById("tph1").innerHTML = tph[0];
  document.getElementById("tph2").innerHTML = tph[1];
  document.getElementById("tpc1").innerHTML = tpc[0];
  document.getElementById("tpc2").innerHTML = tpc[1];
  document.getElementById("mch").innerHTML = mp2[0];
  document.getElementById("mcc").innerHTML = mp2[1];
  document.getElementById("tch1").innerHTML = tch[0];
  document.getElementById("tch2").innerHTML = tch[1];
  document.getElementById("tcc1").innerHTML = tcc[0];
  document.getElementById("tcc2").innerHTML = tcc[1];
  document.getElementById("hpi").innerHTML = qph;
  document.getElementById("hpo").innerHTML = qpc;
  document.getElementById("tdp").innerHTML = tmtdp;
  document.getElementById("upi").innerHTML = upo;
  document.getElementById("upo").innerHTML = upi;
  document.getElementById("ep").innerHTML = ep;
  document.getElementById("hci").innerHTML = qch;
  document.getElementById("hco").innerHTML = qcc;
  document.getElementById("tdc").innerHTML = tmtdc;
  document.getElementById("uci").innerHTML = uco;
  document.getElementById("uco").innerHTML = uci;
  document.getElementById("ec").innerHTML = ec;
  
  

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
    xaxis: { range: [0, 0.2], title: "Thickness of slab" },
    yaxis: { range: [0, 170], title: "temperature" },
    title: "Thickness of slab vs. temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
}
