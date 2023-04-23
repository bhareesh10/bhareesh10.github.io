window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let ww = document.getElementsByName("w");
  let w_value = [];
  for (let i = 0; i < 3; i++) {
    w_value.push(Number(ww[i].value));
  }
   
  
  let tt = document.getElementsByName("t");
  let t_value = [];
  for (let i = 0; i < 3; i++) {
    t_value.push(Number(tt[i].value));
  }

  //localStorage.setItem("a",(a_value));

  let myobj = {
    w: w_value,
    t: t_value,

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
