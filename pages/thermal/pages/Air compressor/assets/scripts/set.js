window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let p = myobj_des.p;
  let d = myobj_des.d;
  let t = myobj_des.t;
  let h1=myobj_des.h1;
  let h2=myobj_des.h2;
   

  let ha = [];
  for (let i = 0; i < 6; i++) {
    ha[i] =10*(h2[i]-h1[i])/1.2; 
  }

  let va = [];
  for (let i = 0; i < 6; i++) {
    va[i] =  
      0.62*0.049*Math.sqrt(19.62*ha[i]);
  }

  let vth = [];
  for (let i = 0; i < 6; i++) {
    vth[i] = 0.013;
  }

  let ve = [];
  for (let i = 0; i < 6; i++) {
    ve[i] = va[i]/vth[i];
  }
  let c = [];
  for (let i = 0; i < 6; i++) {
    c[i] = 144/t[i];
  }
  let r = [];
  for (let i = 0; i < 6; i++) {
    r[i] = (d[i]*98.1+101.35)/101.35;
  }
  let is = [];
  for (let i = 0; i < 6; i++) {
    is[i] = 101.325*va[i]*Math.log(r[i]);
  }
  let ie = [];
  for (let i = 0; i < 6; i++) {
    ie[i] = is[i]/c[i];
  }
  let aw = [];
  for (let i = 0; i < 6; i++) {
    aw[i] = 7*101.325*va[i]*(Math.pow(r[i],0.14)-1)/100;
  }
  let ae = [];
  for (let i = 0; i < 6; i++) {
    ae[i] = aw[i]*100/c[i];
  }
   
  for (let i = 0;i <6; i++) {
  document.getElementById(`va${i+1}`).innerHTML = va[i].toFixed(2);
  document.getElementById(`vth${i+1}`).innerHTML = vth[i].toFixed(3) ;
  document.getElementById(`is${i+1}`).innerHTML = is[i].toFixed(2)/100;
  document.getElementById(`ve${i+1}`).innerHTML = ve[i].toFixed(2) ;
  document.getElementById(`c${i+1}`).innerHTML = c[i].toFixed(2) ;
  document.getElementById(`ie${i+1}`).innerHTML = ie[i].toFixed(2) ;
  document.getElementById(`aw${i+1}`).innerHTML = aw[i].toFixed(2);
  document.getElementById(`ae${i+1}`).innerHTML = ae[i].toFixed(2) ;

  
 }
 



var trace1 = {
  x: r,
  y: ae,
  name: 'Adiabatic Efficiency',
  type: 'scatter'
};
var trace2 = {
  x: r,
  y: ie,
  name: 'Isothermal Efficiency',
  type: 'scatter'
};
var trace3 = {
  x: r,
  y: ve,
  name: 'Volumetric Efficiency',
  type: 'scatter'
};
var data = [trace1, trace2,trace3];
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
      text: 'Pressure Ratio',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Isothermal,Adiabatic&Volumetric Efficiency',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};



// Define Layout



// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

 




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

