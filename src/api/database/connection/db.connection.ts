import mongoose from 'mongoose';
import {MongoDbUrl} from './dbUrl.connection';

class Database{
    public connection():void{
        mongoose.Promise = global.Promise;
        const mongo = MongoDbUrl();
        mongoose.connect(mongo, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default new Database();