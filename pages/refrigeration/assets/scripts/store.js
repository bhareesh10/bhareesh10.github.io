window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let t1 = document.getElementsByName("t1");
  let t1_value = [];
  for (let i = 0; i < 6; i++) {
    t1_value.push(Number(t1[i].value));
  }
  let p = document.getElementsByName("p");
  let p_value = [];
  for (let i = 0; i < 2; i++) {
    p_value.push(Number(p[i].value));
  }

  let n = document.getElementsByName("nt");
  let n_value = [];
  for (let i = 0; i < 2; i++) {
    n_value.push(Number(n[i].value));
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
    t1: t1_value,
    p: p_value,
    n: n_value,
    
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
