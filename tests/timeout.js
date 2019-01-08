const Yatl = require('../Timer.js');

var timeout1 = new Yatl.Timeout(()=>{
    console.log("Timeout1 triggered");
}).start(2000);

var timeout2 = new Yatl.Timeout().start(4000);

var timer = new Yatl.Timer(()=>{
    console.log("Timeout2 running", timeout2.isRunning);
}).start(1000);
