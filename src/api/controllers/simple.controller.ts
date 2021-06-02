import {Request, Response} from 'express';

import {simple} from '../models/simple.model';

class SimpleController{
    constructor(){

    }

    async simple(req:Request, res:Response):Promise<Response>{
        try{
            const book = await simple();
            return res.status(200).json({return: book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }
}

export default new SimpleController();