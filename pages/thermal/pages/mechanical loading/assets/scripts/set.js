window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let r1 = myobj_des.r1;
  let r2 = myobj_des.r2;
  let t1 = myobj_des.t1;
  let t2= myobj_des.t2; 




  let d = 0.36/2;
  let tl = 3 * d * 9.81;

  let m1= (400-0)/(t1[3]-0);
  let b1 = 200-(m1*t1[1]);
  let xn2 = (500-b1)/m1;
  let xn1 = (400-b1)/m1;
  let tt2 = xn2-xn1;
  document.getElementById("x2").innerHTML = xn2-xn1;

  let m2= (400-0)/(t2[3]-0);
  let b2 = 200-(m2*t2[1]);
  let x2 = (500-b2)/m2;
  let x1 = (400-b2)/m2;
  let tt3 = x2-x1;


  let tf = tl*(tt3/(tt2-tt3));

  let fp = (2*3.14*1500*tf)/60000;
  let bp = 0.746*5;
  let ip = bp+fp;
  let me = bp/ip;
  document.getElementById("x").innerHTML = tf;
  document.getElementById("ip").innerHTML = ip;
  document.getElementById("bp").innerHTML = bp;
  document.getElementById("me").innerHTML = me*100;

  


   

 
let yArray1 = [100,200,300,400,500];
let xArray1 = t1;
let yArray2 = [100,200,300,400,500];
let xArray2 = t2;

var trace1 = {
  y: [100,200,300,400,500],
  x: t1,
  name: 'No load',
  type: 'scatter'
};
var trace2 = {
  y: [100,200,300,400,500],
  x: t2,
  name: 'Load',
  type: 'scatter'
};

var data = [trace1, trace2];
var layout = {
  title: {
    text:'',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Time(Sec)',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Speed(rpm)',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};


// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

 




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

function getLineEquation(x1, y1, x2, y2) {
  var m = (y2 - y1) / (x2 - x1);
  var b = y1 - m * x1;

  return {
    equation: "y = " + m + "x + " + b,
    getPointY: function(x) {
      return m * x + b;
    }
  };
}


