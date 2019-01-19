import dotenv                 from "./dotenv";
import validateConfigurations from "./validateConfigurations";

export function runStartupScripts(): void {
    dotenv();
    validateConfigurations();
}