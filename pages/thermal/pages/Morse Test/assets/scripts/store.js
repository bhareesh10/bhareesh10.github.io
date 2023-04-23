window.onload = window.localStorage.clear();

function calculateValues() {
  //temp1
  let ele = document.getElementsByName("load");
  let tt1 = [];
  for (let i = 0; i < 5; i++) {
    tt1.push(Number(ele[i].value));
  }
  //localStorage.setItem("temp1",JSON.stringify(tem1));

  //temp2
  let tt2 = document.getElementsByName("rpm");
  let tt2_value = [];
  for (let j = 0; j < 5; j++) {
    tt2_value.push(Number(tt2[j].value));
  }
 

  let myobj = {
    t1: tt1,
    t2: tt2_value,
  };

  let myobj_ser = JSON.stringify(myobj);
  localStorage.setItem("myobj", myobj_ser);
  console.log(localStorage);
 
  return;
}
