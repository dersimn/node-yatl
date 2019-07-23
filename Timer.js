class YatlTimer {
    constructor(fn, t) {
        this.fn = fn;
        this.timerObj = null;
        this.t = t || null;
    }

    start(t) {
        if (!this.timerObj && (arguments.length === 1 || this.t)) {
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
    constructor(fn, t) {
        this.fn = fn;
        this.timerObj = null;
        this.t = t || null;
        this.running = false;
    }

    start(t) {
        if (!this.timerObj && (arguments.length === 1 || this.t)) {
            this.t = t;
            this.timerStarted = Date.now();
            this.timerObj = setTimeout(() => {
                typeof this.fn === 'function' && this.fn(this.timerStarted, this.timeout);
                this.stop();
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
    constructor(fntk, fn, tk, t) {
        this.timerObj = new YatlTimer(
            () => {
                typeof fntk === 'function' && fntk(
                    this.timerObj.isRunning,
                    this.timeoutObj.timerStarted,
                    this.timeoutObj.timeout,
                    this.timerObj.interval
                );
            },
            tk
        );

        this.timeoutObj = new YatlTimeout(
            () => {
                this.timerObj.stop();
                this.timerObj.exec();
                typeof fn === 'function' && fn();
            },
            t
        );
    }

    start(to, tk) {
        if (
                (arguments.length === 2 || (this.timerObj.interval && this.timeoutObj.timeout))
            &&  (!this.timerObj.isRunning && !this.timeoutObj.isRunning)
           )
        {
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
        return this.stop().start(to, tk);
    }
}

module.exports = {
    Timer         : YatlTimer,
    Timeout       : YatlTimeout,
    TimeoutTicker : YatlTimeoutTicker
}
