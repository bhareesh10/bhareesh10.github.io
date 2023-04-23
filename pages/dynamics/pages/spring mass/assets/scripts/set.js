window.addEventListener("load", mydata);
function mydata() {

  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let store = {};
  let w = myobj_des.w1;
  let d = myobj_des.d1;
  let t = myobj_des.t1;
  let k = [];
  for (let i = 0; i < 4; i++){
  k[i] = (w[i]/d[i]);
  }
  let km = ((k[0] + k[1] + k[2] + k[3])/4);
  let tth = [];
  for (let i = 0; i < 4; i++){
    tth[i] = (2*3.14*(Math.pow(w[i]/(km*9.81),1/2))).toFixed(2);
    }
  let texp = [];
  for (let i = 0; i < 4; i++){
    texp[i] = t[i]/10;
    }
    let fth = [];
  for (let i = 0; i < 4; i++){
    fth[i] = (1/tth[i]).toFixed(2);
    }
  let fexp = [];
  for (let i = 0; i < 4; i++){
    fexp[i] = (1/texp[i]).toFixed(2);
    }





  for (let i = 0; i < 4; i++) {
  document.getElementById(`w${i+1}`).innerHTML = w[i];
  document.getElementById(`d${i+1}`).innerHTML = d[i];
  document.getElementById(`t${i+1}`).innerHTML = t[i];
  document.getElementById(`km${i+1}`).innerHTML = km.toFixed(2);
  document.getElementById(`k${i+1}`).innerHTML = k[i].toFixed(2);
  document.getElementById(`tt${i+1}`).innerHTML = tth[i];
  document.getElementById(`te${i+1}`).innerHTML = texp[i].toFixed(2);
  document.getElementById(`ft${i+1}`).innerHTML = fth[i];
  document.getElementById(`fe${i+1}`).innerHTML = fexp[i];
}



  



  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);
}

