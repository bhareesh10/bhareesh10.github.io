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

  //document.getElementById("dem").innerHTML = myobj_des.b[0];
  //console.log(myobj_des);
  let store = {};

  let mp1 = myobj_des.mp1;
  let mp2 = myobj_des.mp2;
  let tph = myobj_des.tph;
  let tpc = myobj_des.tpc;
  let tch = myobj_des.tch;
  let tcc = myobj_des.tcc;
  
  let qphh = (mp1[0]/60)*4200*(tph[0]-tph[1]);
  let qph =parseFloat(qphh.toFixed(2));
  let qpcc = (mp1[1]/60)*4200*(tpc[1]-tpc[0]);
  let qpc =parseFloat(qpcc.toFixed(2));
  let qp = (qpc+qph)/2;
  let dtf1 = tph[0] - tpc[0];
  let dtf2 = tph[1] - tpc[1];
  let tmtdpp = (dtf1 - dtf2)/(Math.log(dtf1/dtf2)) +273;
  let tmtdp =parseFloat(tmtdpp.toFixed(2));

  let upoo = qp/(0.05*tmtdp);
  let upo =parseFloat(upoo.toFixed(2));
  let upii = qp/(0.081*tmtdp);
  let upi =parseFloat(upii.toFixed(2));
  let cph = 4200*mp1[0]/60;
  let cpc = 4200*mp1[1]/60;
  let cmin = 0;
  if (cph<cpc) {
    cmin = cph;
  } else {
    cmin = cpc;
  }
  let epp = ((mp1[1]/60)*4200*(tpc[1] -tpc[0]))/(cmin*(tph[0] -tpc[0]));
  let ep =parseFloat(epp.toFixed(2));




  






  let qchh = (mp2[0]/60)*4200*(tch[0]-tch[1]);
  let qch =parseFloat(qchh.toFixed(2));
  let qccc = (mp2[1]/60)*4200*(tcc[1]-tcc[0]);
  let qcc =parseFloat(qccc.toFixed(2));
  let qc = (qcc+qch)/2;
  let dtf1c = tch[0] - tcc[0];
  let dtf2c = tch[1] - tcc[1];
  let tmtdcc = (dtf1c - dtf2c)/(Math.log(dtf1c/dtf2c)) +273;
  let tmtdc =parseFloat(tmtdcc.toFixed(2));

  let ucoo = qc/(0.05*tmtdc);
  let uco =parseFloat(ucoo.toFixed(2));
  let ucii = qc/(0.081*tmtdc);
  let uci =parseFloat(ucii.toFixed(2));
  let cch = 4200*mp1[0]/60;
  let ccc = 4200*mp1[1]/60;
  let cminc = 0;
  if (cch<ccc) {
    cminc = cch;
  } else {
    cminc = ccc;
  }
  let ecc = ((mp2[1]/60)*4200*(tcc[1] -tcc[0]))/(cminc*(tch[0] -tcc[0]));
  let ec =parseFloat(ecc.toFixed(2));


  

  

  
  

  //display variables

  document.getElementById("hpi").innerHTML = qph;
  document.getElementById("hpo").innerHTML = qpc;
  document.getElementById("tdp").innerHTML = tmtdp;
  document.getElementById("upi").innerHTML = upo;
  document.getElementById("upo").innerHTML = upi;
  document.getElementById("ep").innerHTML = ep;
  document.getElementById("hci").innerHTML = qch;
  document.getElementById("hco").innerHTML = qcc;
  document.getElementById("tdc").innerHTML = tmtdc;
  document.getElementById("uci").innerHTML = uco;
  document.getElementById("uco").innerHTML = uci;
  document.getElementById("ec").innerHTML = ec;



  store.qph = qph;
  store.qpc = qpc;
  store.tmtdp = tmtdp;
  store.upo = upo;
  store.upi = upi;
  store.ep = ep;
  store.qcc = qcc;
  store.qch = qch;
  store.tmtdc = tmtdc;
  store.uco = uco;
  store.uci = uci;
  store.ec = ec;
  store.tph = tph;
  store.tpc = tpc;
  store.tch = tch;
  store.tcc = tcc;
  store.mp1 = mp1;
  store.mp2 = mp2;

  



  
  

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}



