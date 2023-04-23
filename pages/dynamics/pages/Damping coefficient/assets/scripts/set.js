window.addEventListener("load", mydata);
function mydata() {
  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
   
  let d = myobj_des.d;
  let t = myobj_des.t;
  let xn = myobj_des.xn;
  let xnr = myobj_des.xnr;
  
//Torsional stiffness of the shaft
//g*ip/l
  let kt= (0.8*1.029*Math.pow(10,-1))/0.975;
  
  //mi of flywheel
  //W*d*d/8g
  let I=(9.025*0.246*0.246)/(8*9.81);
  
  //angular velocity
  let wn=Math.sqrt(kt/I);
  
  let s=(xn[0]/xnr[0]);
  

  //logarithmic decrement 
  let ld=(0.1) *Math.log10(s);
  
  //damping factor
  let z=Math.sqrt((ld*ld)/((4*3.14*3.14)+(ld*ld)));

  //critical damping coefficient
  let ccr=2*0.91*wn;

  //damping coefficient cact
  let ca=z*ccr;
 

 
  document.getElementById("ca").innerHTML = ca.toFixed(3);
 
  
   
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}




