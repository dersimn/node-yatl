const Yatl = require('../Timer.js');

const log = require('yalm');
log.setLevel('debug');

var timeoutticker = new Yatl.TimeoutTicker((isRunning, timerStarted, duration, interval) => {
    log.debug('Tick - time remaining', (isRunning) ? timerStarted+duration - Date.now() : 0);
}/*, () => {
    // Funtion on finish is optional
    log.debug('Timeout reached');
}*/).start(10000, 1000);

var timeout = new Yatl.Timeout(() => {
    log.debug('Restart');
    timeoutticker.restart();
}).start(2500);