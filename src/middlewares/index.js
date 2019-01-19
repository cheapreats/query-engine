import {mountParsing} from "./parsing";

export function mountMiddlewares(router) {
    mountParsing(router);
}