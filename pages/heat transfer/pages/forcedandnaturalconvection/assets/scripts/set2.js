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
  let t2 = myobj_des.t2;
  let mpn = myobj_des.mpn;
  let mpf = myobj_des.mpf;
  let B = myobj_des2.a[0];
  let Y = myobj_des2.a[1];
  let kair = myobj_des2.a[2];
  let cp = myobj_des2.a[3];
  let U = myobj_des2.a[4];

  
  let vid = myobj_des.vi;
  //document.getElementById("dem").innerHTML = b[0];
  //
  let ts = (t1[0] + t1[1] + t1[2] + t1[3] + t1[4] )/5;
  let tf = (ts + t1[5])/2;
  let gr = (9.81 * B * (ts - t1[5]) * Math.pow(0.0127,3))/Math.pow(Y,2);
  let pr = (U * cp)/kair;
  let nu = 1.1*Math.pow((gr * pr),1/7);
  let hn = (nu * kair)/0.0127;
  let h = parseFloat(hn.toFixed(3));
  let a = (3.14)*Math.pow((0.0127),2)/4;
  let m = Math.pow((h * 3.14 * 0.0127)/(110 *a),1/2);
  let qn = (Math.pow(h * 3.14 * 0.0127 *110 *a,1/2)) * (ts - t1[5]) * Math.tanh(m * 0.15);
  let q = parseFloat(qn.toFixed(3));
  let ta = Math.tanh(m * 0.15);
  let ninn = ta/(m*0.15);
  let nin = parseFloat(ninn.toFixed(4));
  

  
  let tsf = (t2[0] + t2[1] + t2[2] + t2[3] + t2[4] )/5;
  let tff = (tsf + t2[5])/2

  let P = myobj_des2.f[0];
  let U2 = myobj_des2.f[1];
  let k2air = myobj_des2.f[2];
  let af = (3.14/4)*Math.pow((0.02),2);
  let hw = mpf[0]/100;
  let ha = 1000 * hw / 1.2;
  let qa = 0.64 * af * Math.sqrt(2*9.81*ha);
  let uf = (qa *(tf +273))/((0.15*0.1)*(t1[5]+273));
  let u1 = parseFloat(uf.toFixed(3));
  let re = (P * u1 * 0.0127)/U2;
  let nuf = 0.683 * Math.pow((re),0.466);
  let hff = (nuf * k2air)/0.0127;
  let hf = parseFloat(hff.toFixed(3));
  let mf = Math.pow((hf * 3.14 * 0.0127)/(110 *a),1/2);
  let qff = (Math.pow(hf * 3.14 * 0.0127 *110 *a,1/2)) * (tsf - t2[5]) * Math.tanh(mf * 0.15);
  let qf = parseFloat(qff.toFixed(3));
  let taf = Math.tanh(mf * 0.15);
  let ninff = taf/(mf*0.15);
  let ninf = parseFloat(ninff.toFixed(3));
  

  store.t1 = t1;
  store.t2 = t2;
  store.qn = q;
  store.hn = h;
  store.nin = nin;
  store.u = u1;
  store.qf = qf;
  store.hf = hf;
  store.ninf = ninf;

  

  

  
  

  //display variables

  document.getElementById("x").innerHTML = nin*100;
  document.getElementById("y").innerHTML = ninf*100;
  
  // Define Data
  //graph
  
  
  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}



