import mongoose from 'mongoose';
import {MongoDbUrl} from './dbUrl.connection';

class Database{
    public connection():void{
        mongoose.Promise = global.Promise;
        const mongo = MongoDbUrl();
        mongoose.connect("mongodb+srv://joselucas:3x0O1mftkLrt9dLH@books.uvzhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default new Database();