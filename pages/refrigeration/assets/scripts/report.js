//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let h1 = mystore_s.h;
  let copth = mystore_s.copth;
  let copcar = mystore_s.copcar;
  let a_cop = mystore_s.actual_cop;
  let cop = mystore_s.cop;
  

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t11").innerHTML = t1[0];
  document.getElementById("t12").innerHTML = t1[1];
  document.getElementById("t13").innerHTML = t1[2];
  document.getElementById("t14").innerHTML = t1[3];
  document.getElementById("t15").innerHTML = t1[4];

  document.getElementById("h1").innerHTML = h1[0];
  document.getElementById("h2").innerHTML = h1[1];
  document.getElementById("h3").innerHTML = h1[2];
  document.getElementById("h4").innerHTML = h1[3];
 

  document.getElementById("a").innerHTML = cop;
  document.getElementById("x").innerHTML = copth;
  document.getElementById("y").innerHTML = copcar;
  document.getElementById("z").innerHTML = a_cop;



  

  
}
