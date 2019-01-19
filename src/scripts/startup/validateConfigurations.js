export default function() {
    if(!process.env.PORT) {
        console.log("No [PORT] found, using default port.");
    } else {
        if(!process.env.PORT.match(/^[0-9]+$/) || process.env.PORT < 0 || process.env.PORT > 65535) {
            console.error(`${process.env.PORT} is not a valid port.`);
            throw new Error(`${process.env.PORT} is not a valid port.`);
        }
    }
}