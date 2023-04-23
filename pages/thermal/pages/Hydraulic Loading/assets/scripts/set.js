window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let l = myobj_des.l;
  let t = myobj_des.t;
  let s= myobj_des.s;
  
  let h1=myobj_des.h1;
  let h2=myobj_des.h2;
   
    
  let tfc = [];
  for (let i = 0; i < 5; i++) {
    tfc[i] = ((0.017) / t[i])*3600  ;
  }
  //t=l*r*9.81
  let ts = [];
  for (let i = 0; i < 5; i++) {
    ts[i] =  
      ( l[i]*0.32*9.81);
  }

  let bp = [];
  for (let i = 0; i < 5; i++) {
    bp[i] =  ((2*3.14*s[i]*ts[i])/60000);
  }

  let bsfc = [];
  for (let j = 0; j < 5; j++) {
    bsfc[j] = (tfc[j]/bp[j] );
    if(bsfc[j]==Infinity)
    {
      bsfc[j]=0;
    }
  }

  let fp = 0.5;

  let ip = [];
  for (let i = 0; i < 5; i++) {
    ip[i] =  
      (bp[i]+fp);
  }

  let me = [];
  for (let i = 0; i < 5; i++) {
    me[i] =  
      (bp[i]/ip[i])*100;
  }
  let bte = [];
  for (let i = 0; i < 5; i++) {
    bte[i] =  
      (bp[i]*3600)/(tfc[i]*45000)*100;
  }


  let hw = [];
  for (let i = 0; i < 5; i++) {
    hw[i] = (h1[i]-h2[i])/100;
  }

  
  let ha = [];
  for (let i = 0; i < 5; i++) {
    ha[i] = (1000*hw[i])/1.2;
  }

  
  let qa = [];
  for (let i = 0; i < 5; i++) {
    qa[i] = (0.62*0.000314*Math.pow(2*9.81*ha[i],0.5));
  }


  let ite = [];
  for (let i = 0; i < 5; i++) {
    ite[i] = ((ip[i]*3600)/(tfc[i]*45000))*100;
  }

  let qth = [];
  for (let i = 0; i < 5; i++) {
    qth[i] = (3.14*Math.pow(0.095,2)*0.11*(s[i]/2)*2)/(60*4);
  }
  let ve = [];
  for (let i = 0; i < 5; i++) {
    ve[i] = (qa[i]/qth[i])*100;
  }

  let af = [];
  for (let i = 0; i < 5; i++) {
    af[i] = (1.2*qa[i]*3600)/tfc[i];
  }


 

 
  for (let i = 0; i < 5; i++) {
   
  document.getElementById(`tfc${i+1}`).innerHTML = tfc[i].toFixed(2);
  document.getElementById(`bsfc${i+1}`).innerHTML = bsfc[i].toFixed(1);
  document.getElementById(`bp${i+1}`).innerHTML = bp[i].toFixed(2) ;
  document.getElementById(`fp${i+1}`).innerHTML = fp ;
  document.getElementById(`ip${i+1}`).innerHTML = ip[i].toFixed(2);
  document.getElementById(`me${i+1}`).innerHTML = me[i].toFixed(2);
  document.getElementById(`bte${i+1}`).innerHTML = bte[i].toFixed(2);
  document.getElementById(`qa${i+1}`).innerHTML = qa[i].toFixed(2);
  document.getElementById(`ite${i+1}`).innerHTML = ite[i].toFixed(2);
  document.getElementById(`qth${i+1}`).innerHTML = qth[i].toFixed(4);
  document.getElementById(`ve${i+1}`).innerHTML = ve[i].toFixed(2);
  document.getElementById(`af${i+1}`).innerHTML = af[i].toFixed(2);
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

