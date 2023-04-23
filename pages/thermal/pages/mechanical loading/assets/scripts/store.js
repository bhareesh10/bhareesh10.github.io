window.onload = window.localStorage.clear();

function calculateValues() {
  let r1 = document.getElementsByName("r1");
  let r1_value = [];
   for (let i = 0; i < 5; i++) {
    r1_value.push(Number(r1[i].value));
  }

  let r2 = document.getElementsByName("r2");
  let r2_value = [];
   for (let i = 0; i < 5; i++) {
    r2_value.push(Number(r2[i].value));
  }

  let t1 = document.getElementsByName("t1");
  let t1_value = [];
   for (let i = 0; i < 5; i++) {
    t1_value.push(Number(t1[i].value));
  }

  let t2 = document.getElementsByName("t2");
  let t2_value = [];
   for (let i = 0; i < 5; i++) {
    t2_value.push(Number(t2[i].value));
  }
 
  


  let myobj = {
    r1: r1_value,
    r2: r2_value,
    t1: t1_value,
    t2: t2_value,
 
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
