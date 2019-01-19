import fs                from "fs";
import {spawn}           from 'child_process';
import util              from 'util';
import uuid              from 'uuid/v4';
import Process           from "./process/Process";
import JavaScriptSandbox from "../sandbox/JavaScriptSandbox";

fs.writeFile = util.promisify(fs.writeFile);
fs.unlink = util.promisify(fs.unlink);


const CODE_DIR   = 'code';
const JS_RUNTIME = 'babel-node';

export default class JavaScriptRunner {

    static async run(code): Promise<Process> {
        let codeFileName = uuid();
        code = JavaScriptSandbox.transformCode(code);
        await fs.writeFile(`${CODE_DIR}/${codeFileName}`, code);
        const child = spawn('npx', [JS_RUNTIME, `${CODE_DIR}/${codeFileName}`, '--presets', '@babel/preset-env']);
        let process = new Process(child);
        // Remove the file upon process termination
        process.onExit(async () => {
            await fs.unlink(`${CODE_DIR}/${codeFileName}`);
        });

        return process;
    }

}