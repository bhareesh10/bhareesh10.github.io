window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let w = myobj_des.w;
  let t = myobj_des.t;
  let i=0.022;
  let e=2*Math.pow(10,6);
  let p=(i*e*9.81*48)/(4*3.14*3.14*Math.pow(1.04,3));
  let q=e*i*9.81;


  let fl= [];
  for (let i = 0; i < 3; i++){
  fl[i] = Math.sqrt(p/w[i]);
  }

 let fb = [];
  for (let i = 0; i < 3; i++){
  fb[i] = (3.14/(2*1.04*1.04))*Math.sqrt(q/w[i]);
  }
 
  let te = [];
  for (let i = 0; i < 3; i++){
    te[i] = (t[i]/10);
    }
  let fe = [];
  for (let i = 0; i < 3; i++){
    fe[i] =(1/te[i]);
    }

  let fth = [];
  for (let i = 0; i < 3; i++){
    fth[i] =(1/Math.pow(fl[i],2))+(1/Math.pow(fb[i],2));
    }

    let fthe= [];
  for (let i = 0; i < 3; i++){
    fthe[i] = 1/(Math.sqrt(fth[i]));
    }
 
  for (let i = 0; i < 3; i++) {

  document.getElementById(`fl${i+1}`).innerHTML =fl[i].toFixed(2);
  document.getElementById(`fb${i+1}`).innerHTML = fb[i].toFixed(2);
  document.getElementById(`fth${i+1}`).innerHTML = fth[i].toFixed(8);
  document.getElementById(`fthe${i+1}`).innerHTML = fthe[i].toFixed(2);
  document.getElementById(`fe${i+1}`).innerHTML = fe[i].toFixed(2);
  document.getElementById(`te${i+1}`).innerHTML = te[i].toFixed(2);
  


}
 
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

