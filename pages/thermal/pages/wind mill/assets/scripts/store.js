window.onload = window.localStorage.clear();

function calculateValues() {
  let aa = document.getElementsByName("a");
  let a_value = [];
  for (let j = 0; j < 5; j++) {
    a_value.push(Number(aa[j].value));
  }
  
 
  let v11 = document.getElementsByName("v1");
  let v1_value = [];
  for (let j = 0; j < 5; j++) {
    v1_value.push(Number(v11[j].value));
  }
  let v22 = document.getElementsByName("v2");
  let v2_value = [];
  for (let j = 0; j < 5; j++) {
    v2_value.push(Number(v22[j].value));
  }
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let j = 0; j < 5; j++) {
    t_value.push(Number(tt[j].value));
  }

  

 


  let myobj = {
    a: a_value,
    v1: v1_value,
    v2: v2_value,
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
