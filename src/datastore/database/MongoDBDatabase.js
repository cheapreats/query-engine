// @flow
import Database          from "./Database";
import MongoDBCollection from "../collection/MongoDBCollection";

export default class MongoDBDatabase extends Database {

    db: any;

    constructor(db: any) {
        super();
        this.db = db;
    }

    async getCollection(collectionName: string): Promise<MongoDBCollection> {
        return new MongoDBCollection(this.db.collection(collectionName));
    }

}