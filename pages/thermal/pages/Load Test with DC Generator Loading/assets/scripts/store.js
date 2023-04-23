window.onload = window.localStorage.clear();

function calculateValues() {
  let ll = document.getElementsByName("l");
  let l_value = [];
   for (let i = 0; i < 6; i++) {
    l_value.push(Number(ll[i].value));
  }
 
  let vv= document.getElementsByName("v");
  let v_value = [];
  for (let j = 0; j < 6; j++) {
    v_value.push(Number(vv[j].value));
  }

  
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let j = 0; j < 6; j++) {
    t_value.push(Number(tt[j].value));
  }

  let ss = document.getElementsByName("s");
  let s_value = [];
  for (let j = 0; j < 6; j++) {
    s_value.push(Number(ss[j].value));
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
    l: l_value,
    v: v_value,
    t: t_value,
    s: s_value,
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
