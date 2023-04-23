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

  

  
  let t = myobj_des.t2;
  
  //document.getElementById("dem").innerHTML = b[0];
  //t

  

  let tg = (t[0] + t[1] + t[2]) / 3;
  let tt = tg/10;
  let g = 9.81;
  let h = 0.165;

  let k = (Math.pow(((Math.pow(tt/(2*3.14),2) * g * h ) - Math.pow(h,2)),1/2)).toFixed(3);

  
  



  

  //display variables
  document.getElementById("x").innerHTML = k;
  
  
  
  // Define Data
  //graph
  //let xx1 = ri;
  /*let xx2 = ri[1] + rm[2];
  let xx3 = ri[1] + rm[2] + ro[3];
  var x = [0, xx1, xx2, xx3];

  var xArray = x;
  var yArray = t;
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
*/
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}


/*function th_conductivity(ra,rb,ta,tb,l,q) {
  let k = ((q * (ra - rb) )/(2 * 3.14159 * ra * rb * (tb - ta)));
  return parseFloat(k.toFixed(3));
}*/

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
