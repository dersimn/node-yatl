const Yatl = require('../Timer.js');

var timer1 = new Yatl.Timer(()=>{
    console.log("Timer1 - every 2s");
}).start(2000);

var timer2 = new Yatl.Timer((started, interval)=>{
    console.log("Tiemr2 - every " + interval/1000 + "s - running for " + (Date.now() - started) + "ms");
}).start(4000);
