export const MongoDbUrl = ()=>{
    if(process.env.NODE_ENV === 'production'){
        return process.env.MONGODB_URL_PRODUCTION;
    }
    return process.env.MONGODB_URL;
}