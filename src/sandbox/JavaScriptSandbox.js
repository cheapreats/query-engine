import MongoDBConnection from "../datastore/connection/MongoDBConnection";
const dotenv = require('dotenv');

global.connection = false;

export default class JavaScriptSandbox {

    static transformCode(code) {
        return `
        const JavaScriptSandbox = require('../src/sandbox/JavaScriptSandbox').default;
        (async () => {
            await JavaScriptSandbox.setup();
            await JavaScriptSandbox.execute(${code});
            connection.close();
        })();
        `
    }

    static async setup() {
        console.log("Setting up JavaScript environment...");
        console.log(`Executing in ${__dirname}.`);
        console.log("====================================\n");
        dotenv.load();
        connection = await MongoDBConnection.open({
            url: process.env.DB_URL
        });
    }

    static async execute(func) {
        await func();
    }
}