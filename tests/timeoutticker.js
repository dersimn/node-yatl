const Yatl = require('../Timer.js');

var timeoutticker = new Yatl.TimeoutTicker(() => {
    console.log('Timeout reached');
}, (time, timeout) => {
    console.log('Tick', time, 'of', timeout, '(actual time is', Date.now(), ')');
}).start(10000, 1000);
