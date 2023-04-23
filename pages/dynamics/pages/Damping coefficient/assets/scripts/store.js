window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  
     
  let dd = document.getElementsByName("d");
  let d_value = [];
  for (let j = 0; j < 1; j++) {
    d_value.push(Number(dd[j].value));
  }
  let xn = document.getElementsByName("xn");
  let xn_value = [];
  for (let j = 0; j < 1; j++) {
    xn_value.push(Number(xn[j].value));
  }
  let xnr = document.getElementsByName("xnr");
  let xnr_value = [];
  for (let j = 0; j < 1; j++) {
    xnr_value.push(Number(xnr[j].value));
  }
  
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let j = 0; j < 1; j++) {
    t_value.push(Number(tt[j].value));
  }
  //localStorage.setItem("a",(a_value));

  let myobj = {
    d: d_value,
    xn: xn_value,
    xnr: xnr_value,
    t: t_value
  };

  

  let myobj_ser = JSON.stringify(myobj);
  localStorage.setItem("myobj", myobj_ser);
  console.log(localStorage);

  //i
  //let ii = document.getElementsByName("i").value;
  //let const_i = Number(ii.value);
  //localStorage.setItem("current",ii);

  //let dd = document.getElementsByName("d");
  // let const_d = Number(dd.value);
  //localStorage.setItem("diameter",const_d);

  //   document.getElementById("demo").innerHTML = sum;
  return;
}
