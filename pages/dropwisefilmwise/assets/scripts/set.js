window.addEventListener("load", mydata);
function mydata() {
  
  let myobj_des = JSON.parse(localStorage.getItem("myobj"));

  
  let store = {};

  
  let t = myobj_des.t;
  
  let v = myobj_des.v;
  
 



  let m= v[1] * 0.001;
  let qf = m*4180*(t[6]-t[0]);
  let a = 3.14*0.0157*0.3;
  let hf = qf/(a*(t[5]-t[1]));
  let hff = parseFloat(hf.toFixed(3));
  let dtf1 = t[2] - t[6];
  let dtf2 = t[2] - t[1];
  let lmtdf = (dtf1 - dtf2)/(Math.log(dtf1/dtf2));
  let uf = qf/(a*lmtdf);
  let uff = parseFloat(uf.toFixed(3));



  let qd = m*4180*(t[7]-t[0]);
  
  let hd = qd/(a*(t[5]-t[3]));
  let hdd = parseFloat(hd.toFixed(3));
  let dtd1 = t[4] - t[7];
  let dtd2 = t[4] - t[3];
  let lmtdd = (dtd1 - dtd2)/(Math.log(dtd1/dtd2));
  let ud = qd/(a*lmtdd); 
  let udd = parseFloat(ud.toFixed(3));
  
  
  

  document.getElementById("x").innerHTML =  hff;
  document.getElementById("y").innerHTML =  hdd;
  
  
  
  // Define Data
  //graph
  

  store.hf = hff;
  store.lmtdf = lmtdf;
  store.uf = uff;
  store.hd = hdd;
  store.lmtdd = lmtdd;
  store.ud = udd;
  store.t = t;
  store.v = v;
  

  // Define Layout
  
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}


