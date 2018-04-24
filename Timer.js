class Timer {
    constructor(fn) {
        this.fn = fn;
        this.timer = null;
        this.timeouts = [];
    }

    start(t) {
        if (this.timer) {
            this.stop();
        }
        this.timerObj = setInterval(this.fn, t);

        return this;
    }
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        while (this.timeouts.length) {
            clearTimeout(this.timeouts.pop());
        }
        return this;
    }

    exec() {
        this.fn();
        return this;
    }

    timeout(to) {
        this.timeouts.push(setTimeout(this.fn, to)); //Todo: clarify if this results in a memory leak
        return this;
    }
}

module.exports = Timer;
