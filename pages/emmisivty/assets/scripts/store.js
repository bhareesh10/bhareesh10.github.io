window.onload = window.localStorage.clear();

function calculateValues() {

  //temp2
  let tt2 = document.getElementsByName("v");
  let tt2_value = [];
  for (let j = 0; j < 2; j++) {
    tt2_value.push(Number(tt2[j].value));
  }

  //temp3
  let tt3 = document.getElementsByName("t");
  let tt3_value = [];
  for (let j = 0; j < 7; j++) {
    tt3_value.push(Number(tt3[j].value));
  }

  //localStorage.setItem("temp2",JSON.stringify(tt2_value));

  //b


  let myobj = {
    
    t2: tt2_value,
    t3: tt3_value,
    
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
