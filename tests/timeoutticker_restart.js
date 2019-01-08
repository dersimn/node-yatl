const Yatl = require('../Timer.js');

const log = require('yalm');
log.setLevel('debug');

var timeoutticker = new Yatl.TimeoutTicker((timerStarted, duration) => {
    log.debug('Tick - time remaining', timerStarted+duration - Date.now());
}, () => {
    log.debug('Timeout reached');
}).start(10000, 1000);

var timeout = new Yatl.Timeout(() => {
    log.debug('Restart');
    timeoutticker.restart();
}).start(5000);