import {APIRouter} from "./APIRouter";
import {WebRouter} from "./WebRouter";

export function mountRoutes(app) {
    app.use('/api', APIRouter);
    app.use('/', WebRouter);
}