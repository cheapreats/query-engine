import {mountJsonParser} from "./json";
import {mountRawParser}  from "./raw";

export function mountParsing(router) {
    mountJsonParser(router);
    mountRawParser(router);
}