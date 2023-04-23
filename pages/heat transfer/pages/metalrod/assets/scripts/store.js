window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let tt = document.getElementsByName("t1");
  let t_value = [];
  for (let i = 0; i < 11; i++) {
    t_value.push(Number(tt[i].value));
  }
  console.log(tt);
  
  let vv = document.getElementsByName("a");
  let a_value = [];
  for (let i = 0; i < 3; i++) {
    a_value.push(Number(vv[i].value));
  }
  //localStorage.setItem("a",(a_value));

  let myobj = {
    t1: t_value,
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
