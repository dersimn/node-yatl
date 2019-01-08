const Yatl = require('../Timer.js');

var timeoutticker = new Yatl.TimeoutTicker((isFinished, timerStarted, duration) => {
    console.log('Tick', Date.now() - timerStarted, 'of', duration);
}/*, () => {
    // Funtion on finish is optional
    console.log('Timeout reached');
}*/).start(10000, 1000);
