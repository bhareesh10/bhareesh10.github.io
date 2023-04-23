//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let h = mystore_s.h;
  let hth = mystore_s.hth;

  

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t11").innerHTML = t1[0];
  document.getElementById("t12").innerHTML = t1[1];
  document.getElementById("t13").innerHTML = t1[2];
  document.getElementById("t14").innerHTML = t1[3];
  document.getElementById("t15").innerHTML = t1[4];
  document.getElementById("t16").innerHTML = t1[5];
  document.getElementById("t17").innerHTML = t1[6];
  document.getElementById("t18").innerHTML = t1[7];


  document.getElementById("h").innerHTML = h;
  document.getElementById("hth").innerHTML = hth;

  
}
