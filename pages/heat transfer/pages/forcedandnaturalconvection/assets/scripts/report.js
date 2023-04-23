//window.addEventListener("load", mydata);
function report() {
  let mystore_s = JSON.parse(localStorage.getItem("mystore"));
  let t1 = mystore_s.t1;
  let t2 = mystore_s.t2;
  let qn = mystore_s.qn;
  let hn = mystore_s.hn;
  let u = mystore_s.u;
  let nin = mystore_s.nin;
  let qf = mystore_s.qf;
  let hf = mystore_s.hf;
  
  let ninf = mystore_s.ninf;

  // document.getElementById("dem").innerHTML = t1[1];

  document.getElementById("t11").innerHTML = t1[0];
  document.getElementById("t12").innerHTML = t1[1];
  document.getElementById("t13").innerHTML = t1[2];
  document.getElementById("t14").innerHTML = t1[3];
  document.getElementById("t15").innerHTML = t1[4];
  document.getElementById("t16").innerHTML = t1[5];
  
  

  document.getElementById("t21").innerHTML = t2[0];
  document.getElementById("t22").innerHTML = t2[1];
  document.getElementById("t23").innerHTML = t2[2];
  document.getElementById("t24").innerHTML = t2[3];
  document.getElementById("t25").innerHTML = t2[4];
  document.getElementById("t26").innerHTML = t2[5];
  
  


  document.getElementById("q").innerHTML = qn;
  document.getElementById("qf").innerHTML = qf;
  document.getElementById("hn").innerHTML = hn;
  document.getElementById("u").innerHTML = u;
  document.getElementById("hf").innerHTML = hf;
  document.getElementById("nin").innerHTML = nin*100;
  document.getElementById("ninf").innerHTML = ninf*100;






 
  
}
