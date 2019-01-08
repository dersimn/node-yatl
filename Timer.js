class YatlTimer {
    constructor(fn) {
        this.fn = fn;
        this.timerObj = null;
        this.t = null;
    }

    start(t) {
        if (!this.timerObj && arguments.length === 1) {
            this.t = t;
            this.timerStarted = Date.now();
            this.timerObj = setInterval(() => {
                typeof this.fn === 'function' && this.fn(this.timerStarted, this.interval);
            }, this.t);
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
        typeof this.fn === 'function' && this.fn();
        return this;
    }

    get interval() {
        return this.t;
    }
    get isRunning() {
        return Boolean(this.timerObj);
    }
}

class YatlTimeout {
    constructor(fn) {
        this.fn = fn;
        this.timerObj = null;
        this.t = null;
        this.running = false;
    }

    start(t) {
        if (!this.timerObj && arguments.length === 1) {
            this.t = t;
            this.timerStarted = Date.now();
            this.timerObj = setTimeout(() => {
                typeof this.fn === 'function' && this.fn(this.timerStarted, this.timeout);
                this.running = false;
            }, this.t);
            this.running = true;
        }
        return this;
    }
    stop() {
        if (this.timerObj) {
            clearTimeout(this.timerObj);
            this.timerObj = null;
            this.running = false;
        }
        return this;
    }
    restart(t) {
        return this.stop().start(t || this.t);
    }

    exec() {
        typeof this.fn === 'function' && this.fn();
        return this;
    }

    get timeout() {
        return this.t;
    }
    get isRunning() {
        return this.running;
    }
}

class YatlTimeoutTicker {
    constructor(fntk, fn) {
        this.timerObj = new YatlTimer(() => {
            typeof this.fntk === 'function' && fntk(
                this.timerObj.isRunning,
                this.timeoutObj.timerStarted,
                this.timeoutObj.timeout,
                this.timerObj.interval
            );
        });

        this.timeoutObj = new YatlTimeout(() => {
            this.timerObj.stop();
            this.timerObj.exec();
            typeof fn === 'function' && fn();
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
