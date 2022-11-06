

function calculateValues() {
  //temp1
  
  //localStorage.setItem("temp1",JSON.stringify(tem1));
  
  //temp2
  let a = document.getElementsByName("a");
  let a_value = [];
  for (let i = 0; i < 6; i++) {
    a_value.push(Number(a[i].value));
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

  let myobj2 = {
    a: a_value,
    
    
  };

  let myobj_ser = JSON.stringify(myobj2);
  localStorage.setItem("myobj2", myobj_ser);
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
