import bodyParser from 'body-parser';

export function mountRawParser(router) {
    router.use(bodyParser.raw({
        type: 'text/plain'
    }));
}
