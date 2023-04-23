window.onload = window.localStorage.clear();

function calculateValues() {

  //temp2
  let v = document.getElementsByName("v");
  let v_value = [];
  for (let j = 0; j < 2; j++) {
    v_value.push(Number(v[j].value));
  }

  //temp3
  let tt = document.getElementsByName("t");
  let tt_value = [];
  for (let j = 0; j < 8; j++) {
    tt_value.push(Number(tt[j].value));
  }

  //localStorage.setItem("temp2",JSON.stringify(tt2_value));

  //b


  let myobj = {
    
    t: tt_value,
    v: v_value,
    
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
