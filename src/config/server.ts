import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import Database from '../api/database/connection/db.connection';
import SimpleRoutes from '../api/routes/books.routes';

class App{
    public express: express.Application;
    constructor(){
        dotenv.config();
        Database.connection();
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares():void{
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes():void{
        const router = express.Router();
        this.express.use('/api', router);
        new SimpleRoutes(router);
    }
}

export default new App().express;