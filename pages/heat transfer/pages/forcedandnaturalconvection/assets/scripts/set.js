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

  let t = myobj_des.t1;
  let t2 = myobj_des.t2;
  let mpn = myobj_des.mpn;
  let mpf = myobj_des.mpf;
  
  
  //document.getElementById("dem").innerHTML = b[0];
  //
  let ts = (t[0] + t[1] + t[2] + t[3] + t[4] )/5;
  let tf = (ts + t[5])/2;

  let tc = (t2[0] + t2[1] + t2[2] + t2[3] + t2[4] )/5;
  let txx = (tc + t2[5])/2;
  

  

  
  

  //display variables

  document.getElementById("tf").innerHTML = tf+273;
  document.getElementById("tff").innerHTML = txx+273;
  
  
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
