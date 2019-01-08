const Yatl = require('../Timer.js');

var timeout1 = new Yatl.Timeout(()=>{
    console.log("Timeout1 triggered");
}).start(1000);

var timeout2 = new Yatl.Timeout(()=>{
    console.log("Timeout2 triggered");
}).start(2000);
