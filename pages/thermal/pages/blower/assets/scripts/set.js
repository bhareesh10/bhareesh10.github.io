window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let v = myobj_des.v;
  let t = myobj_des.t;
  let ti= myobj_des.ti;
  
  let hs=myobj_des.hs;
  let hd=myobj_des.hd;
   
    
  let vh = [];
  for (let i = 0; i < 5; i++) {
    vh[i] = (1000*(hs[i]/100))/1.18  ;
  }
  //t=l*r*9.81
  let dh = [];
  for (let i = 0; i < 5; i++) {
    dh[i] =  
    (1000*(hd[i]/100))/1.18 ;
  }

  let ip = [];
  for (let i = 0; i < 5; i++) {
    ip[i] =  (5*3600*0.85)/(ti[i]*150);
  }

  let q = [];
  for (let j = 0; j < 5; j++) {
    q[j] = 0.021*vh[j];
    
  }

  

  

  let vel = [];
  for (let i = 0; i < 5; i++) {
    vel[i] =  
      q[i]/5.033;
  }
  let dyh = [];
  for (let i = 0; i < 5; i++) {
    dyh[i] =  
      Math.pow(vel[i],2)/(2*9.81);
  }


  let p = [];
  for (let i = 0; i < 5; i++) {
    p[i] = (1.18*9.81*q[i]*dh[i])/1000;
  }

  
  let n = [];
  for (let i = 0; i < 5; i++) {
    n[i] = (p[i]/ip[i])*100;
  }

  
 

 

 
  for (let i = 0; i < 5; i++) {
   
  document.getElementById(`s${i+1}`).innerHTML = i+1;
  document.getElementById(`v${i+1}`).innerHTML = v[i].toFixed(1);
  document.getElementById(`hs${i+1}`).innerHTML = hs[i].toFixed(2) ;
  document.getElementById(`hd${i+1}`).innerHTML = hd[i] ;
  document.getElementById(`t${i+1}`).innerHTML = t[i].toFixed(2);
  document.getElementById(`ti${i+1}`).innerHTML = ti[i].toFixed(2);
  document.getElementById(`vh${i+1}`).innerHTML = vh[i].toFixed(2);
  document.getElementById(`dh${i+1}`).innerHTML = dh[i].toFixed(2);
  document.getElementById(`ip${i+1}`).innerHTML = ip[i].toFixed(2);
  document.getElementById(`q${i+1}`).innerHTML = q[i].toFixed(4);
  document.getElementById(`p${i+1}`).innerHTML = p[i].toFixed(2);
  document.getElementById(`n${i+1}`).innerHTML = n[i].toFixed(2);
 }
 
 var trace1 = {
  x: bp,
  y: bsfc,
  name: 'Brake Specific Fuel Consumption',
  type: 'scatter'
};
var trace2 = {
  x: bp,
  y: bte,
  name: 'Brake Thermal Efficiency',
  type: 'scatter'
};
var trace3 = {
  x: bp,
  y: ite,
  name: 'Indicated Thermal Efficiency',
  type: 'scatter'
};
var trace4 = {
  x: bp,
  y: me,
  name: 'Mechanical Efficiency',
  type: 'scatter'
};
var data = [trace1, trace2,trace3,trace4];
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
      text: 'Brake Power',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'BSFC,Brake,Indicated & Mechanical Efficiency',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

 
Plotly.newPlot("myPlot", data, layout);
 




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

