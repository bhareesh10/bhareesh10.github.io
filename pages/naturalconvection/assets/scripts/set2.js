window.addEventListener("load", mydata);
function mydata() {
  /*let t2 = JSON.stringify(r_t2);
    
    const arrOfStr = ['1', '2', '3'];
    //numm = str_to_num(arrOfStr);
    //const arrOfNum = [];

        //arrOfStr.forEach(str => {
        //    arrOfNum.push(Number(str));
        //    })
        //const arrOfStr = vid;
        //numm = str_to_num(arrOfStr);
        const arrOfNum = [];
    
            arrOfStr.forEach(str => {
              arrOfNum.push(Number(str));
                })
    */
  let myobj_des = JSON.parse(localStorage.getItem("myobj"));
  let myobj_des2 = JSON.parse(localStorage.getItem("myobj2"));

  

  //document.getElementById("dem").innerHTML = myobj_des.b[0];
  //console.log(myobj_des);
  let store = {};

  let t1 = myobj_des.t1;
  
  let Pa = myobj_des2.a[0];
  let U = myobj_des2.a[1];
  let Y = myobj_des2.a[2];
  let pr = myobj_des2.a[3];
  let kair = myobj_des2.a[4];
  let B = myobj_des2.a[5];

  
  let vid = myobj_des.vi;
  //document.getElementById("dem").innerHTML = b[0];

  let q = vid[0] * vid[1];
  let as = 3.14 * 0.044 * 0.5;
  let ts = (t1[0] + t1[1] + t1[2] + t1[3] + t1[4] + t1[5] + t1[6])/7;
  let to = t1[7];
  
  let hh = q/(as * (ts - to));
  let h = parseFloat(hh.toFixed(2));
  let gr = (9.81 * B * (ts - to) * Math.pow(0.5,3))/Math.pow(Y,2);
  let hthh = (0.13*kair*Math.pow((gr * pr),1/3))/0.5;
  let hth = parseFloat(hthh.toFixed(2));
  //
  
  let tf = (ts + t1[5])/2;
  
  document.getElementById("x").innerHTML = hth;
  document.getElementById("y").innerHTML = h;
  
  
  store.t1 = t1;
  store.h = h;
  
  store.hth = hth;
  store.q = q;
  
  

  

  

  
  

  //display variables

  
  
  // Define Data
  //graph
  

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}

