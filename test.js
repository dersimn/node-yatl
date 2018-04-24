const Timer = require('./Timer.js');

var timer1 = new Timer(()=>{
	console.log("Timer1 - every 10 Seconds");
	timeout.timeout(1000);
}).start(10000);

var timer2 = new Timer(()=>{
	console.log("Tiemr2 - every 30 Seconds");
}).start(30000);

var timeout = new Timer(()=>{
	console.log("Timeout triggered");
	timeout.stop();
}).timeout(1000).timeout(5000);
