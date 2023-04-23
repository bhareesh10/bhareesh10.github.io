window.onload = window.localStorage.clear();

function calculateValues() {
  let pp = document.getElementsByName("p");
  let p_value = [];
   for (let i = 0; i < 6; i++) {
    p_value.push(Number(pp[i].value));
  }
 
  let dd= document.getElementsByName("d");
  let d_value = [];
  for (let j = 0; j < 6; j++) {
    d_value.push(Number(dd[j].value));
  }

  
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let j = 0; j < 6; j++) {
    t_value.push(Number(tt[j].value));
  }

  let h11 = document.getElementsByName("h1");
  let h1_value = [];
  for (let j = 0; j < 6; j++) {
    h1_value.push(Number(h11[j].value));
  }
  let h22 = document.getElementsByName("h2");
  let h2_value = [];
  for (let j = 0; j < 6; j++) {
    h2_value.push(Number(h22[j].value));
  }

  


  let myobj = {
    p: p_value,
    d: d_value,
    t: t_value,
    h1: h1_value,
    h2: h2_value,
 
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
