class Timer {
    constructor(fn, t, a = true) {
        this.fn = fn;
        this.t = t;
        this.timerObj = null;
        this.timeoutObj = null;
        
        if (a) {
            this.timerObj = setInterval(fn, t);
        }
    }

    stop() {
        if (this.timerObj) {
            clearInterval(this.timerObj);
            this.timerObj = null;
        }
        if (this.timeoutObj) {
            clearTimeout(this.timeoutObj);
            this.timeoutObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    start() {
        if (!this.timerObj) {
            this.stop();
            this.timerObj = setInterval(this.fn, this.t);
        }
        return this;
    }

    // start with new interval, stop current interval
    reset(newT) {
        if (newT) {
            this.t = newT;
        }
        return this.stop().start();
    }

    exec(to) {
        if (to) {
            this.timeoutObj = setTimeout(this.fn, to);
        } else {
            this.fn();
        }
        return this;
    }
}

module.exports = Timer;
