window.addEventListener("load", mydata);
function mydata() {
  /*let t2 = JSON.stringify(r_t2);
    
    const arrOfStr = ['1', '2', '3'];
    //numm = str_to_num(arrOfStr);
    //const arrOfNum = [];

        //arrOfStr.forEach(str => {
        //    arrOfNum.push(Number(str));
        //    })
        //const arrOfStr = vid;
        //numm = str_to_num(arrOfStr);
        const arrOfNum = [];
    
            arrOfStr.forEach(str => {
              arrOfNum.push(Number(str));
                })
    */
  let myobj_des = JSON.parse(localStorage.getItem("myobj"));

  //document.getElementById("dem").innerHTML = myobj_des.b[0];
  //console.log(myobj_des);
  let store = {};

  let t1 = myobj_des.t1;
  let t2 = myobj_des.t2;
  let t3 = myobj_des.t3;
  let b = myobj_des.b;
  let vid = myobj_des.vi;
  //document.getElementById("dem").innerHTML = b[0];
  //t

  store.t1 = t1;
  store.t2 = t2;
  store.t3 = t3;
  store.b = b;
  store.vid = vid;

  let tt = [];
  for (let i = 0; i < 8; i++) {
    tt[i] = parseFloat(
      ((Number(t1[i]) + Number(t2[i]) + Number(t3[i])) / 3).toFixed(3)
    );
  }

  store.tt = tt;

  let v = vid[0];
  let i = vid[1];
  let dia = vid[2];

  let ta = (tt[0] + tt[1]) / 2;
  let tb = (tt[2] + tt[3]) / 2;
  let tc = (tt[4] + tt[5]) / 2;
  let td = (tt[6] + tt[7]) / 2;
  let q = v * i;
  let area = (3.14 / 4) * Math.pow(dia, 2);
  let hf = parseFloat((q / (2 * area)).toFixed(3));
  let total_thermal_resistance = th_resistance(ta, td, hf);
  let total_thermal_conductivity = th_conductivity(hf, ta, td, b[0]);
  let thermal_resistance_steel = th_resistance(ta, tb, hf);
  let thermal_conductivity_steel = th_conductivity(hf, ta, tb, b[1]);
  let thermal_resistance_bakelite = th_resistance(tc, td, hf);
  let thermal_conductivity_bakelite = th_conductivity(hf, tc, td, b[2]);
  let thermal_resistance_wood = th_resistance(tb, tc, hf);
  let thermal_conductivity_wood = th_conductivity(hf, tb, tc, b[3]);

  store.ta = ta;
  store.tb = tb;
  store.tc = tc;
  store.td = td;
  store.q = q;
  store.hf = hf;
  store.total_thermal_resistance = total_thermal_resistance;
  store.total_thermal_conductivity = total_thermal_conductivity;
  store.thermal_resistance_steel = thermal_resistance_steel;
  store.thermal_conductivity_steel = thermal_conductivity_steel;
  store.thermal_resistance_bakelite = thermal_resistance_bakelite;
  store.thermal_conductivity_bakelite = thermal_conductivity_bakelite;
  store.thermal_resistance_wood = thermal_resistance_wood;
  store.thermal_conductivity_wood = thermal_conductivity_wood;

  //display variables

  document.getElementById("thr").innerHTML = total_thermal_resistance;
  document.getElementById("thc").innerHTML = total_thermal_conductivity;
  document.getElementById("sr").innerHTML = thermal_resistance_steel;
  document.getElementById("sc").innerHTML = thermal_conductivity_steel;
  document.getElementById("br").innerHTML = thermal_resistance_bakelite;
  document.getElementById("bc").innerHTML = thermal_conductivity_bakelite;
  document.getElementById("wr").innerHTML = thermal_resistance_wood;
  document.getElementById("wc").innerHTML = thermal_conductivity_wood;
  // Define Data
  //graph
  let xx1 = b[1];
  let xx2 = b[1] + b[2];
  let xx3 = b[1] + b[2] + b[3];
  var x = [0, xx1, xx2, xx3];

  var xArray = x;
  var yArray = [ta, tb, tc, td];
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
    xaxis: { range: [0, 0.2], title: "Thickness of slab(m)" },
    yaxis: { range: [0, 170], title: "Temperature &deg;C" },
    title: "Thickness of slab vs. temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  let myobj = {
    t1: t1,
    t2: t2,
    avg: tt,
  };
}

function th_resistance(a, b, q) {
  let r = (a - b) / q;

  return parseFloat(r.toFixed(5));
}

function th_conductivity(hf, a, b, bd) {
  let k = (hf * bd) / (a - b);
  return parseFloat(k.toFixed(3));
}

/*function graph (){
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

// Define Layout
var layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}
*/
// function refresh(){
//window.localStorage.clear();

//}

//  let store = {

//  };
//  const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

//  document.getElementById("dem").innerHTML = person.age;
