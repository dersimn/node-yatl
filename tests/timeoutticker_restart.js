const Yatl = require('../Timer.js');

const log = require('yalm');
log.setLevel('debug');

var timeoutticker = new Yatl.TimeoutTicker(() => {
    log.debug('Timeout reached');
}, (timerStarted, duration) => {
    log.debug('Tick - time remaining', timerStarted+duration - Date.now());
}).start(10000, 1000);

var timeout = new Yatl.Timeout(() => {
    log.debug('Restart');
    timeoutticker.restart();
}).start(5000);