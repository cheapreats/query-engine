import {mountSimpleAuth} from "./simpleAuth";

export function mountSecurity(app) {
    mountSimpleAuth(app);
}
