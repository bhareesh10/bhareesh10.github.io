window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let l = myobj_des.l;
  let v = myobj_des.v;
  let t = myobj_des.t;
  let s= myobj_des.s; 
  let h1=myobj_des.h1;
  let h2=myobj_des.h2;
   

  let tfc = [];
  for (let i = 0; i < 6; i++) {
    //(volume of fuel consumed*10pow6 *specific gravity of fuel *Pw)/(t(sec))
    tfc[i] =((61.2)/t[i]); 
  }

  let bp = [];
  for (let i = 0; i < 6; i++) {
    bp[i] =  
      ((Number(v[i]) * Number(l[i]) )) / (1000*0.8 );
  }

  let bsfc = [];
  for (let i = 0; i < 6; i++) {
    bsfc[i] = ( tfc[i]/bp[i]);
  }

  let fp = [];
  for (let i = 0; i < 6; i++) {
    fp[i] = 0.5;
  }
  let ip = [];
  for (let i = 0; i < 6; i++) {
    ip[i] =  
      (bp[i]+fp[i]);
  }
  let bte = [];
  for (let i = 0; i < 6; i++) {
    bte[i] =  
      (bp[i]*3600)/(tfc[i]*45350)*100;
  }
  let ite = [];
  for (let i = 0; i < 6; i++) {
    ite[i] = ((ip[i]*3600)/(tfc[i]*45000))*100;
  }
  let me = [];
  for (let i = 0; i < 6; i++) {
    me[i] =  
      (bp[i]/ip[i])*100;
  }
  let hw = [];
  for (let i = 0; i < 6; i++) {
    hw[i] = (h1[i]-h2[i])/100;
  }

  
  let ha = [];
  for (let i = 0; i < 6; i++) {
    ha[i] = (1000*hw[i])/1.2;
  }

  
  let qa = [];
  for (let i = 0; i < 6; i++) {
    qa[i] = (0.62*0.000314*Math.pow(2*9.81*ha[i],0.5));
  }
  let qth = [];
  for (let i = 0; i < 6; i++) {
    qth[i] = (3.14*Math.pow(0.08,2)*0.11*(s[i]/2))/(60*4);
  }
  let ve = [];
  for (let i = 0; i < 6; i++) {
    ve[i] = (qa[i]/qth[i])*100;
  }

  let af = [];
  for (let i = 0; i < 6; i++) {
    af[i] = (1.2*qa[i]*3600)/tfc[i];
  }
   
  for (let i = 0;i <6; i++) {
  document.getElementById(`tfc${i+1}`).innerHTML = tfc[i].toFixed(2) ;
  document.getElementById(`bsfc${i+1}`).innerHTML = bsfc[i].toFixed(2) ;
  document.getElementById(`bp${i+1}`).innerHTML = bp[i].toFixed(2);
  document.getElementById(`fp${i+1}`).innerHTML = fp[i].toFixed(2); 
  document.getElementById(`ip${i+1}`).innerHTML = ip[i].toFixed(2);
  document.getElementById(`bte${i+1}`).innerHTML = bte[i].toFixed(2);
  document.getElementById(`ite${i+1}`).innerHTML = ite[i].toFixed(2);
  document.getElementById(`me${i+1}`).innerHTML = me[i].toFixed(2);
  document.getElementById(`qa${i+1}`).innerHTML = qa[i].toFixed(4);
  document.getElementById(`qth${i+1}`).innerHTML = qth[i].toFixed(4);
  document.getElementById(`ve${i+1}`).innerHTML = ve[i].toFixed(2);
  document.getElementById(`af${i+1}`).innerHTML = af[i].toFixed(2);

  
  
 }
 var trace1 = {
  x: bp,
  y: ve,
  name: 'Volumetric Efficiency',
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
      text: 'Brake,Volumetric,Indicated & Mechanical Efficiency',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

var trace5 = {
  x: bp,
  y: bsfc,
  name: 'Brake Specific Fuel Consuption',
  type: 'scatter'
};
var trace6 = {
  x: bp,
  y: af,
  name: 'Air Fuel Ratio',
  type: 'scatter'
};
var data1 = [trace5, trace6];
var layout1 = {
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
      text: 'BSFC & Air fuel Ratio',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};
 

  
Plotly.newPlot("myPlot", data, layout);
Plotly.newPlot("myPlot1", data1, layout1);




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

