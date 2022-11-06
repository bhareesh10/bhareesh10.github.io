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

  
  let t = myobj_des.t3;
  
  let vi = myobj_des.t2;
  
  //document.getElementById("dem").innerHTML = b[0];
  //t

  store.tt = t;
  
  store.vi = vi;
  

  

  

  let vo = vi[0];
  let i = vi[1];
  

  let ti = (t[0] + t[1] + t[2] + t[3] + t[4] +t[5]) / 6;
  
  let to = (t[6] + t[7] +t[8] +t[9] + t[10] +t[11]) / 6;
  console.log(ti);
  ri = 0.05;
  ro = 0.1;
  l = 0.5
  let w = Math.log(ro/ri);
  let q = vo * i;
  //let area = (3.14 / 4) * Math.pow(dia, 2);
  
  let kk = th_conductivity(ro,ri,to,ti,l,q);
  
  store.tto = to;
  store.tti = ti;
  store.qq = q;
  store.ttk = kk;
  
  

  //display variables
  document.getElementById("x").innerHTML = kk;
  
  
  
  // Define Data
  //graph
  let xx1 = ri;
  let xx2 = ri + ro;
  
  var x = [xx1, xx2];
  var y = [ti, to];
  var xArray = x;
  var yArray = y;
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
    xaxis: { range: [0, 0.2], title: "Thickness of slab" },
    yaxis: { range: [0, 170], title: "temperature" },
    title: "Thickness of slab vs. temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}


function th_conductivity(ra,rb,ta,tb,l,q) {
  let k = ((q * (ra - rb) )/(4 * 3.14159 * ra * rb * (tb - ta)));
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
