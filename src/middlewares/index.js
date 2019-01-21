import {mountParsing}  from "./parsing";
import {mountSecurity} from "./security";

export function mountMiddlewares(router) {
    mountParsing(router);
    mountSecurity(router);
}