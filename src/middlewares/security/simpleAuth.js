import basicAuth from 'express-basic-auth';

export function mountSimpleAuth(app) {
    app.use(basicAuth({
        users: { [process.env.USERNAME]: process.env.PASSWORD },
        challenge: true
    }))
}