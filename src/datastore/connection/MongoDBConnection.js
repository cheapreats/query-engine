// @flow
import Connection      from "./Connection";
import {MongoClient}   from "mongodb";
import MongoDBDatabase from "../database/MongoDBDatabase";

export type MongoDBConnectionConfiguration = {
    url: string,
    db: string
}

export default class MongoDBConnection extends Connection {

    config: MongoDBConnectionConfiguration;
    client: any;

    constructor(config: MongoDBConnectionConfiguration) {
        super();
        this.config = config;
    }

    async _connect(): Promise<void> {
        this.client = await MongoClient.connect(this.config.url, {useNewUrlParser: true});
    }

    async getDatabase(dbName: string): Promise<MongoDBDatabase> {
        return new MongoDBDatabase(this.client.db(dbName));
    }

    static async open(config: MongoDBConnectionConfiguration): Promise<MongoDBConnection> {
        const connection = new MongoDBConnection(config);
        await connection._connect();
        return connection;
    }

    close() {
        this.client.close();
    }
}