//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let e = mystore_s.ttk;
  

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t1").innerHTML = t1[0];
  document.getElementById("t2").innerHTML = t1[1];
  document.getElementById("t3").innerHTML = t1[2];
  document.getElementById("t4").innerHTML = t1[3];
  document.getElementById("t5").innerHTML = t1[4];
  document.getElementById("t6").innerHTML = t1[5];
  document.getElementById("t7").innerHTML = t1[6];
  

  document.getElementById("e").innerHTML = e;



  
}
