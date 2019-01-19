// @flow
import {mountRoutes}      from "../routers";
import {mountMiddlewares} from "../middlewares";
import path               from 'path';

const express = require('express');

let instance: Server;

export default class Server {

    app: any;

    constructor() {
        this.app = express();
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, '../views'));
        mountMiddlewares(this.app);
        mountRoutes(this.app);
    }

    async run(): Promise<void> {
        const PORT: number = parseInt(process.env.PORT) || 3000;
        this.app.listen(PORT, () => {
            console.log(`Query engine listening on port ${PORT}.`);
        })
    }

    static getInstance(): Server {
        if (!instance) instance = new Server();
        return instance;
    }
}
