import {Request, Response} from 'express';

import {add, getBooks, removeBook, editBook, getBookById} from '../models/books.model';

class SimpleController{
    constructor(){

    }

    async add(req:Request, res:Response):Promise<Response>{
        const data = req.body;
        try{
            const book = await add(data);
            return res.status(200).json({msg: "Added", data:book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }

    async get(req:Request, res:Response):Promise<Response>{
        const params = req.query.name;
        try{
            const book = await getBooks(params);
            return res.status(200).json({data:book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }

    async getById(req:Request, res:Response):Promise<Response>{
        const {id} = req.params;
        try{
            const book = await getBookById(id);
            return res.status(200).json({data:book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }

    async remove(req:Request, res:Response):Promise<Response>{
        const {id} = req.params;
        try{
            const book = await removeBook(id);
            return res.status(200).json({data:book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }

    async update(req:Request, res:Response):Promise<Response>{
        const {id} = req.params;
        const data = req.body;
        try{
            const book = await editBook(id, data);
            return res.status(200).json({data:book});
        }catch(err){
            return res.status(200).json({error: err});
        }
    }
}

export default new SimpleController();