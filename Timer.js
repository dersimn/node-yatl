class Timer {
    constructor(fn) {
        this.fn = fn;
        this.timer = null;
        this.timeouts = [];
    }

    start(t) {
        this.t = t;
        
        this.stop();
        this.timerObj = setInterval(this.fn, this.t);

        return this;
    }
    restart() {
        return this.start(this.t);
    }
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
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

    reset() {
        this.stop();
        while (this.timeouts.length) {
            clearTimeout(this.timeouts.pop());
        }

        return this;
    }
}

module.exports = Timer;
