import mongoose from 'mongoose';

class Database{
    public connection():void{
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default new Database();