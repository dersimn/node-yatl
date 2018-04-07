const Timer = require('Timer.js');

var timer1 = new Timer(()=>{
	console.log("every 2 Seconds");
},2000).start();

var timer2 = new Timer(()=>{
	console.log("every 3 Seconds");
},3000).start();

var timer3 = new Timer(()=>{
	console.log("reset timer1 every 5sec");
	timer1.reset(1000);
},2000).start();
