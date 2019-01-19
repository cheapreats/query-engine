import JavaScriptRunner from "../runner/JavaScriptRunner";

export default class ScriptController {
    static async runScript(req, res) {
        let code = req.body.toString();
        let process = await JavaScriptRunner.run(code);
        let data = "";
        let errData = "";
        process.onData(d => {
            data += d;
        });
        process.onError(d => {
            errData += d;
        });
        process.onExit(() => {
            res.send({
                stdout: data,
                stderr: errData
            });
        });
    }
}