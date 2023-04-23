window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  let l = myobj_des.l;
  let v = myobj_des.v;
  let t = myobj_des.t;
  let s= myobj_des.s;
  let q = myobj_des.q;
  let h1=myobj_des.h1;
  let h2=myobj_des.h2;
  let i=myobj_des.i;
  let o=myobj_des.o;
  let b=myobj_des.b;
  let a=myobj_des.a;
  let q1=myobj_des.q1;

  let bhp = [];
  for (let i = 0; i < 6; i++) {
    bhp[i] =  
      ((Number(l[i]) * Number(v[i]) )) / (1000*0.8 ).toFixed(3);
  }
 
 

  let tfc = [];
  for (let i = 0; i < 6; i++) {
    tfc[i] =  
      ((1.02) ) / (Number(t[i]) ) ;
  }
  

  let hi = [];
  for (let i = 0; i < 6; i++) {
    hi[i] =  
      (Number(tfc[i])* 45350)  .toFixed(3);
  } 

  let he = [];
  for (let i = 0; i < 6; i++) {
    he[i] =  
      ( Number(bhp[i])*60).toFixed(3) ;
  }
 
  let hcw = [];
  for (let j = 0; j < 6; j++) {
    hcw[j] =  
      ( (8.36)*(Number(o[j])-Number(i[j])) ).toFixed(3);
  }

  let ha = [];
  for (let i = 0; i < 6; i++) {
    ha[i] =  
      (((Number(h1[i])-Number(h2[i]))*10)/1.2).toFixed(3);
  }
   
  let qa=[];
  for (let j = 0; j < 6; j++) {
    qa[j]=(0.6*0.000374)*(Math.sqrt(2*9.81*ha[j])).toFixed(3);
  }
  let ma=[];
  for (let j = 0; j < 6; j++) {
    ma[j]= (qa[j]*1.2*60).toFixed(3);
  }
  let mg=[];
  for (let j = 0; j < 6; j++) {
    mg[j]= parseFloat(ma[j]+tfc[j])  ;
  }

  let z=[]
  for (let j = 0; j < 6; j++)
  {
    z[j]=(b[j]-i[j])*mg[j];
  }
  let hceg=[];
  for (let j = 0; j < 6; j++) {
    hceg[j]= (1.005)*z[j].toFixed(3);
  }

  let klm=[];
  for (let j = 0; j < 6; j++) {
    klm[j]= parseInt(he[j]+hcw[j]+hceg[j]);
  }

  let hul=[];
  for (let j = 0; j < 6; j++) {
    hul[j]= hi[j]-he[j]-hcw[j]-hceg[j];
  }

  let p=[]
  for (let j = 0; j < 1; j++) {
    p[0]= (he[1]/hi[1])*100;
    p[1]= (hcw[1]/hi[1])*100;
    p[2]=(hceg[1]/hi[1])*100;
    p[3]=(hul[1]/hi[1])*100;
  }







  for (let i = 0; i < 6; i++) {
  document.getElementById(`bhp${i+1}`).innerHTML = bhp[i].toFixed(4);
  document.getElementById(`tfc${i+1}`).innerHTML = tfc[i].toFixed(4);
  document.getElementById(`hi${i+1}`).innerHTML = hi[i];
  document.getElementById(`he${i+1}`).innerHTML = he[i] ;
  document.getElementById(`hcw${i+1}`).innerHTML =hcw[i];
  document.getElementById(`hceg${i+1}`).innerHTML =hceg[i].toFixed(2);
  document.getElementById(`hul${i+1}`).innerHTML =hul[i].toFixed(2);
 }
 document.getElementById("hi").innerHTML = hi[1];
 document.getElementById("he").innerHTML = he[1];
 document.getElementById("hcw").innerHTML = hcw[1];
 document.getElementById("hceg").innerHTML = hceg[1].toFixed(3);
 document.getElementById("hul").innerHTML = hul[1].toFixed(3);
 document.getElementById("hj").innerHTML = hi[1];
 document.getElementById("hk").innerHTML = hi[1];

 document.getElementById("hea").innerHTML = p[0].toFixed(2) ;
 document.getElementById("hcwa").innerHTML = p[1].toFixed(2);
 document.getElementById("hcega").innerHTML = p[2].toFixed(2);
 document.getElementById("hula").innerHTML = p[3].toFixed(2);

 

 




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

