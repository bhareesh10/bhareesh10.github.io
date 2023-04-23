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

  let t = myobj_des.t1;
  let n = myobj_des.n;
  
  let h = myobj_des2.a;
  

  
  let copthh = (h[0] - h[3])/(h[1]-h[0]);
  let copth = parseFloat(copthh.toFixed(2));
  let copcarh = (t[1]+273)/(t[1] - t[0]);
  let copcar = parseFloat(copcarh.toFixed(2));
  let re_effect = (14 * 4.18* (t[4]-t[5]))/(30*60);
  let act_worhdone = (n[0]*3600)/(n[1]*1600);
  let actual_coph = re_effect/act_worhdone;
  let actual_cop = parseFloat(actual_coph.toFixed(2));
  let coph = actual_cop/copth;
  let cop = parseFloat(coph.toFixed(2));
  //document.getElementById("dem").innerHTML = b[0];

  
  //
  
  
  
  document.getElementById("y").innerHTML = copth;
  document.getElementById("x").innerHTML = copcar;
  document.getElementById("z").innerHTML = actual_cop;
  
  
  store.t1 = t;
  store.h = h;
  store.copth = copth;
  store.copcar = copcar;
  store.actual_cop = actual_cop;
  store.cop = cop;
  store.h = h;
  store.re = parseFloat(re_effect.toFixed(2));
  store.act = parseFloat(act_worhdone.toFixed(2));
  store.n = n;


  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}


