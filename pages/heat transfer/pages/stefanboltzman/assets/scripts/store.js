window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let tt = document.getElementsByName("t1");
  let t_value = [];
  for (let i = 0; i < 4; i++) {
    t_value.push(Number(tt[i].value));
  }
  console.log(tt);

  let tt2 = document.getElementsByName("t2");
  let t2_value = [];
  for (let i = 0; i < 13; i++) {
    t2_value.push(Number(tt2[i].value));
  }

  let tti = document.getElementsByName("ti");
  let ti_value = [];
  for (let i = 0; i < 13; i++) {
    ti_value.push(Number(tti[i].value));
  }
  console.log(tt);
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
    t1: t_value,
    t2: t2_value,
    ti: ti_value,
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
