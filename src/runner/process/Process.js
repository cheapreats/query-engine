export default class Process {

    child: any;
    onDataHandlers: function[]  = [];
    onErrorHandlers: function[] = [];
    onExitHandlers: function[]  = [];
    timeout: number = 10000;
    terminated: boolean = false;

    constructor(child, timeout = 10000) {
        this.child = child;
        this.child.stdout.on('data', this._onData);
        this.child.stderr.on('data', this._onError);
        this.child.on('exit', this._onExit);
        this.timeout = timeout;
        setTimeout(() => {
            if(!this.terminated) {
                this.child.kill('SIGINT'); // Send SIGINT
            }
            this._onError(`Runtime exceeded ${this.timeout}ms. SIGINT, process terminated.`);
        }, this.timeout);
    }

    _onData = data => {
        for (let handler of this.onDataHandlers) handler(data);
    };

    _onExit = () => {
        this.terminated = true;
        for (let handler of this.onExitHandlers) handler();
    };

    _onError = data => {
        for (let handler of this.onErrorHandlers) handler(data);
    };

    onData(func) {
        this.onDataHandlers.push(func);
    }

    onError(func) {
        this.onErrorHandlers.push(func);
    }

    onExit(func) {
        this.onExitHandlers.push(func);
    }

}