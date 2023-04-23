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
  let t2 = document.getElementsByName("t2");
  let t2_value = [];
  for (let i = 0; i < 6; i++) {
    t2_value.push(Number(t2[i].value));
  }
  let mpn = document.getElementsByName("mpn");
  let mpn_value = [];
  for (let i = 0; i < 2; i++) {
    mpn_value.push(Number(mpn[i].value));
  }
  let mpf = document.getElementsByName("mpf");
  let mpf_value = [];
  for (let i = 0; i < 2; i++) {
    mpf_value.push(Number(mpf[i].value));
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
    t2: t2_value,
    mpn: mpn_value,
    mpf: mpf_value,
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
