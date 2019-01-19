import {runStartupScripts} from "./scripts/startup";
import Server              from './server/Server';

runStartupScripts();

const server = Server.getInstance();
server.run();