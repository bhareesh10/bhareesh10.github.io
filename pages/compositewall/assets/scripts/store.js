window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  let ele = document.getElementsByName("t1");
  let tt1 = [];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    tt1.push(Number(ele[i].value));
  }
  //localStorage.setItem("temp1",JSON.stringify(tem1));

  //temp2
  let tt2 = document.getElementsByName("t2");
  let tt2_value = [];
  for (let j = 0; j < 8; j++) {
    tt2_value.push(Number(tt2[j].value));
  }

  //temp3
  let tt3 = document.getElementsByName("t2");
  let tt3_value = [];
  for (let j = 0; j < 8; j++) {
    tt3_value.push(Number(tt3[j].value));
  }

  //localStorage.setItem("temp2",JSON.stringify(tt2_value));

  //b
  let bb = document.getElementsByName("b");
  let b_value = [];
  for (let i = 0; i < 4; i++) {
    b_value.push(Number(bb[i].value));
  }
  //localStorage.setItem("b",JSON.stringify(b_value));

  //v

  // let vv = document.getElementsByName("a");
  //localStorage.setItem('q','[]');
  //for (let i = 0; i < 4; i++){
  //    var od = JSON.parse(localStorage.getItem('q'));
  //    od.push(Number(vv[i].value));
  //    localStorage.setItem('q',od);
  // }

  let vv = document.getElementsByName("a");
  let a_value = [];
  for (let i = 0; i < 3; i++) {
    a_value.push(Number(vv[i].value));
  }
  //localStorage.setItem("a",(a_value));

  let myobj = {
    t1: tt1,
    t2: tt2_value,
    t3: tt3_value,
    b: b_value,
    vi: a_value,
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
