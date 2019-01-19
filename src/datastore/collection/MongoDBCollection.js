// @flow
import Collection from "./Collection";

export default class MongoDBCollection extends Collection {

    collection: any;

    constructor(collection: any) {
        super();
        this.collection = collection;
    }

    async find(filter) {
        return await this.collection.find(filter).toArray();
    }

}