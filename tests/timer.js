const Timer = require('../Timer.js');

var timer1 = new YatlTimer(()=>{
    console.log("Timer1 - every 10 Seconds");
    timeout.timeout(1000);
}).start(10000);

var timer2 = new YatlTimer(()=>{
    console.log("Tiemr2 - every 30 Seconds");
}).start(30000);
