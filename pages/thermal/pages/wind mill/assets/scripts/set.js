window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};

  
  let t = myobj_des.t;
  let a= myobj_des.a;
  
  let v1=myobj_des.v1;
  let v2=myobj_des.v2;
   
    
  let pi = [];
  for (let i = 0; i < 5; i++) {
    pi[i] = 0.5*1.17*0.2472*Math.pow(v1[i],3)  ;
  }
  //t=l*r*9.81
  let po = [];
  for (let i = 0; i < 5; i++) {
    po[i] =  
      ( (0.25)*(v1[i]+v2[i])*(Math.pow(v1[i],2)-Math.pow(v2[i],2))*1.17*0.247);
  }

  

  let pc = [];
  for (let j = 0; j < 5; j++) {
    pc[j] = (po[j]/pi[j] );
    
  }

 
 
  for (let i = 0; i < 5; i++) {
    document.getElementById(`s${i+1}`).innerHTML = i+1;
  document.getElementById(`t${i+1}`).innerHTML = t[i].toFixed(2);
  document.getElementById(`a${i+1}`).innerHTML = a[i].toFixed(1);
  document.getElementById(`v1${i+1}`).innerHTML = v1[i].toFixed(2) ;
  document.getElementById(`v2${i+1}`).innerHTML = v2[i].toFixed(2) ;
  document.getElementById(`pi${i+1}`).innerHTML = pi[i].toFixed(2);
  document.getElementById(`po${i+1}`).innerHTML = po[i].toFixed(2);
  document.getElementById(`pc${i+1}`).innerHTML = pc[i].toFixed(2);
 }
 
 

 

 




  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

