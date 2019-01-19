import bodyParser from 'body-parser';

export function mountJsonParser(router) {
    router.use(bodyParser.urlencoded({ extended: false }))
}
