const Yatl = require('../Timer.js');

var timer1 = new Yatl.Timer(()=>{
    console.log("Timer1 - every 2 Seconds");
}).start(2000);

var timer2 = new Yatl.Timer(()=>{
    console.log("Tiemr2 - every 4 Seconds");
}).start(4000);
