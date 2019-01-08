class YatlTimer {
    constructor(fn) {
        this.fn = fn;
        this.timerObj = null;
        this.t = null;
    }

    start(t) {
        if (!this.timerObj && arguments.length === 1) {
            this.t = t;
            this.timerObj = setInterval(this.fn, this.t);
        }
        return this;
    }
    stop() {
        if (this.timerObj) {
            clearInterval(this.timerObj);
            this.timerObj = null;
        }
        return this;
    }
    restart(t) {
        return this.stop().start(t || this.t);
    }

    exec() {
        this.fn();
        return this;
    }

    get currentInterval() {
        return this.t;
    }
}

class YatlTimeout {
    constructor(fn) {
        this.fn = fn;
        this.timerObj = null;
        this.t = null;
    }

    start(t) {
        if (!this.timerObj && arguments.length === 1) {
            this.t = t;
            this.timerObj = setTimeout(this.fn, this.t);
        }
        return this;
    }
    stop() {
        if (this.timerObj) {
            clearTimeout(this.timerObj);
            this.timerObj = null;
        }
        return this;
    }
    restart(t) {
        return this.stop().start(t || this.t);
    }

    exec() {
        this.fn();
        return this;
    }

    get currentTimeout() {
        return this.t;
    }
}

class YatlTimeoutTicker {
    constructor(fn, fntk) {
        this.ticks = 0;

        this.timerObj = new YatlTimer(() => {
            this.ticks++;
            fntk(this.ticks * this.timerObj.currentInterval, this.timeoutObj.currentTimeout);
        });

        this.timeoutObj = new YatlTimeout(() => {
            this.timerObj.stop();
            fn();
        });
    }

    start(to, tk) {
        if (arguments.length === 2) {
            this.timeoutObj.start(to);
            this.timerObj.start(tk);
        }
        return this;
    }
    stop() {
        this.timeoutObj.stop();
        this.timerObj.stop();
        return this;
    }
    restart(to, tk) {
        this.timeoutObj.restart(to);
        this.timerObj.restart(tk);
        return this;
    }
}

module.exports = {
    Timer         : YatlTimer,
    Timeout       : YatlTimeout,
    TimeoutTicker : YatlTimeoutTicker
}
