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

  let rpm = myobj_des.t2;
  let load = myobj_des.t1;

  //document.getElementById("dem").innerHTML = b[0];
  //t

  
  

  
  let bp1 = bp(load[1],rpm[1]);
  let bp2 = bp(load[2],rpm[2]);
  let bp3 = bp(load[3],rpm[3]);
  let bp4 = bp(load[4],rpm[4]);
  let bpt = bp(load[0],rpm[0]);


  let ip1 = ip(bpt,bp1);
  let ip2 = ip(bpt,bp2);
  let ip3 = ip(bpt,bp3);
  let ip4 = ip(bpt,bp4);

  let ipt = ip1 + ip2 + ip3 + ip4;
  let fpp = ipt - bpt;
  let fp = fpp.toFixed(2);
  let me = ((bpt/ipt) * 100).toFixed(2); 

  

  //display variables

  document.getElementById("r1").innerHTML = rpm[0];
  document.getElementById("r2").innerHTML = rpm[1];
  document.getElementById("r3").innerHTML = rpm[2];
  document.getElementById("r4").innerHTML = rpm[3];
  document.getElementById("r5").innerHTML = rpm[4];

  document.getElementById("l1").innerHTML = load[0];
  document.getElementById("l2").innerHTML = load[1];
  document.getElementById("l3").innerHTML = load[2];
  document.getElementById("l4").innerHTML = load[3];
  document.getElementById("l5").innerHTML = load[4];


  document.getElementById("bp1").innerHTML = bp1.toFixed(2);
  document.getElementById("bp2").innerHTML = bp2.toFixed(2);
  document.getElementById("bp3").innerHTML = bp3.toFixed(2);
  document.getElementById("bp4").innerHTML = bp4.toFixed(2);
  document.getElementById("ip1").innerHTML = ip1.toFixed(2);
  document.getElementById("ip2").innerHTML = ip2.toFixed(2);
  document.getElementById("ip3").innerHTML = ip3.toFixed(2);
  document.getElementById("ip4").innerHTML = ip4.toFixed(2);
  document.getElementById("ipt").innerHTML = ipt.toFixed(2);
  document.getElementById("iptt").innerHTML = ipt.toFixed(2);
  document.getElementById("bpt").innerHTML = bpt.toFixed(2);
  document.getElementById("bptt").innerHTML = bpt.toFixed(2);
  document.getElementById("me").innerHTML = me;
  document.getElementById("fp").innerHTML = fp;

  
  // Define Data
  //graph
  

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  let myobj = {
    t1: t1,
    t2: t2,
    avg: tt,
  };
}

function bp(load, rpm) {
  let bp = (load * rpm)/2000;

  return parseFloat(bp.toFixed(5));
}


function ip(bpt, bp) {
  let ip = (bpt - bp);

  return parseFloat(ip.toFixed(5));
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
