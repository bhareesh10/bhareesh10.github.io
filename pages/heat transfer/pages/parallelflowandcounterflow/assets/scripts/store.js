window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let mp1 = document.getElementsByName("mp1");
  let mp1_value = [];
  for (let i = 0; i < 2; i++) {
    mp1_value.push(Number(mp1[i].value));
  }
  let mp2 = document.getElementsByName("mp2");
  let mp2_value = [];
  for (let i = 0; i < 2; i++) {
    mp2_value.push(Number(mp2[i].value));
  }

  let tph = document.getElementsByName("tph");
  let tph_value = [];
  for (let i = 0; i < 2; i++) {
    tph_value.push(Number(tph[i].value));
  }

  let tpc = document.getElementsByName("tpc");
  let tpc_value = [];
  for (let i = 0; i < 2; i++) {
    tpc_value.push(Number(tpc[i].value));
  }

  let tch = document.getElementsByName("tch");
  let tch_value = [];
  for (let i = 0; i < 2; i++) {
    tch_value.push(Number(tch[i].value));
  }

  let tcc = document.getElementsByName("tcc");
  let tcc_value = [];
  for (let i = 0; i < 2; i++) {
    tcc_value.push(Number(tcc[i].value));
  }
  

  
  //temp3
  
  //localStorage.setItem("b",JSON.stringify(b_value));

  //v

  // let vv = document.getElementsByName("a");
  //localStorage.setItem('q','[]');
  //for (let i = 0; i < 4; i++){
  //    var od = JSON.parse(localStorage.getItem('q'));
  //    od.push(Number(vv[i].value));
  //    localStorage.setItem('q',od);
  // }

  
  //localStorage.setItem("a",(a_value));

  let myobj = {
    mp1: mp1_value,
    mp2: mp2_value,
    tph: tph_value,
    tpc: tpc_value,
    tch: tch_value,
    tcc: tcc_value,
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
