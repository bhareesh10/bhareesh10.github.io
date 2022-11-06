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

  let t1 = myobj_des.t1;
  
  let vid = myobj_des.vi;
  let xi = [10,40,160,210,280];
  


  

  

  let v = vid[0];
  let i = vid[1];
  let mf = vid[2]*(0.001)/60;
  let a = (3.14  * Math.pow(0.02,2))/4;
  let mw = (mf/60)* Math.pow(10,3);
  let dtdx = -(t1[1] - t1[3])/(xi[1]-xi[3]);
  let dt = dtdx;
  let kk = (mf * 4.187*(t1[10]-t1[9]))/(a*dt);
  let k =parseFloat(kk.toFixed(2));


  store.t1 = t1;
  store.vid = vid;
  store.k = k;
  

  
  

  //display variables

  document.getElementById("thr").innerHTML =dt;
  
  // Define Data
  //graph
  

  var xArray = xi;
  var yArray = t1
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
    xaxis: {  title: "Length(cm)" },
    yaxis: {  title: "temperature&deg;C" },
    title: "Length vs. Temperature",
  };

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);

  let mystore_ser = JSON.stringify(store);
  localStorage.setItem("mystore", mystore_ser);
  console.log(localStorage);

  
}

