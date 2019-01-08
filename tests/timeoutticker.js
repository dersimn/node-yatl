const Yatl = require('../Timer.js');

var timeoutticker = new Yatl.TimeoutTicker(() => {
    console.log('Timeout reached');
}, (timerStarted, duration) => {
    console.log('Tick', Date.now() - timerStarted, 'of', duration);
}).start(10000, 1000);
