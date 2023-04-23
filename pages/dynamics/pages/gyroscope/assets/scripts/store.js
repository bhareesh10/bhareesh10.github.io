window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let tt = document.getElementsByName("s");
  let t_value = [];
  for (let i = 0; i < 10; i++) {
    t_value.push(Number(tt[i].value));
  }
  console.log(tt);
  
  let vv = document.getElementsByName("a");
  let a_value = [];
  for (let i = 0; i < 10; i++) {
    a_value.push(Number(vv[i].value));
  }
  let vv1 = document.getElementsByName("c");
  let a_value1 = [];
  for (let i = 0; i < 10; i++) {
    a_value1.push(Number(vv1[i].value));
  }

  let vv2 = document.getElementsByName("p");
  let a_value2 = [];
  for (let i = 0; i < 10; i++) {
    a_value2.push(Number(vv2[i].value));
  }
  let vv3 = document.getElementsByName("t");
  let a_value3 = [];
  for (let i = 0; i < 10; i++) {
    a_value3.push(Number(vv3[i].value));
  }

  //localStorage.setItem("a",(a_value));

  let myobj = {
    s: t_value,
    a: a_value,
    c: a_value1,
    p: a_value2,
    t: a_value3,

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
