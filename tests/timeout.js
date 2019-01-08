const Timer = require('../Timer.js');

var timeout1 = new YatlTimeout(()=>{
    console.log("Timeout1 triggered");
}).timeout(1000);

var timeout2 = new YatlTimeout(()=>{
    console.log("Timeout2 triggered");
}).timeout(2000);
