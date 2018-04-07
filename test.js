const Timer = require('./Timer.js');

console.log('Testing YaTL');

var timer1 = new Timer(()=>{
	console.log("Timer1 - every 2 Seconds");
},2000).start();

var timer2 = new Timer(()=>{
	console.log("Tiemr2 - every 3 Seconds");
},3000).start();

var timer3 = new Timer(()=>{
	console.log("Timer3 - reset timer1 every 5sec");
	timer1.reset(1000);
},5000).start();
