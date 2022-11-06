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

  let t = myobj_des.t1;
  let t1 = myobj_des.t2;
  let ti = myobj_des.ti;

  
  
  //t
  let tt = ((t[0]+t[1]+t[2])/3 )+273;
  let td = t[3] +273;

  let dtdt=(t1[6]-t1[2])/(ti[6]-ti[2]);
  let a1 = (3.14/4) * Math.pow((19.9/1000),2);
  let sigh = (0.005*381*dtdt)/(a1*(Math.pow(tt,4)-Math.pow(td,4)));
  let sig =parseFloat(sigh.toFixed(10));
  

  store.t = t;
  store.t1 = t1;
  store.sig = sig;
  store.ti = ti;

  

  
  

  //display variables

  document.getElementById("thr").innerHTML = sig;
  
  // Define Data
  //graph
  
  var xArray = ti;
  var yArray = t1;
  var data = [
    {
      x: xArray,
      y: yArray,
      mode: "lines",
    },
  ];

  store.x = xArray;
  store.y = yArray;

  // Define Layout
  var layout = {
    xaxis: { range: [0, 150], title: "time(sec)" },
    yaxis: { range: [0, 50], title: "Temperature &deg;c" },
    title: "Time vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}



