//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t;
  let vi = mystore_s.v;
  let hf = mystore_s.hf;
  let hd = mystore_s.hd;
  let ud = mystore_s.ud;
  let uf = mystore_s.uf;
  let x = mystore_s.x;
  let y = mystore_s.y;

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t1").innerHTML = t1[0];
  document.getElementById("t2").innerHTML = t1[1];
  document.getElementById("t3").innerHTML = t1[2];
  document.getElementById("t4").innerHTML = t1[3];
  document.getElementById("t5").innerHTML = t1[4];
  document.getElementById("t6").innerHTML = t1[5];
  document.getElementById("t7").innerHTML = t1[6];
  document.getElementById("t8").innerHTML = t1[7];


  

  

  document.getElementById("hf").innerHTML = hf;
  document.getElementById("hd").innerHTML = hd;
  document.getElementById("uf").innerHTML = uf;
  document.getElementById("ud").innerHTML = ud;

  

 

  

}
