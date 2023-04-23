window.onload = window.localStorage.clear();

function calculateValues() {
  let vv = document.getElementsByName("v");
  let v_value = [];
  for (let j = 0; j < 5; j++) {
    v_value.push(Number(vv[j].value));
  }
 
 
  let hs = document.getElementsByName("hs");
  let hs_value = [];
  for (let j = 0; j < 5; j++) {
    hs_value.push(Number(hs[j].value));
  }
  let hd = document.getElementsByName("hd");
  let hd_value = [];
  for (let j = 0; j < 5; j++) {
    hd_value.push(Number(hd[j].value));
  }
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let j = 0; j < 5; j++) {
    t_value.push(Number(tt[j].value));
  }
  let tti = document.getElementsByName("ti");
  let ti_value = [];
  for (let j = 0; j < 5; j++) {
    ti_value.push(Number(tti[j].value));
  }

  

 


  let myobj = {
    v: v_value,
    ti: ti_value,
    hs: hs_value,
    hd: hd_value,
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
