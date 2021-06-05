import express from 'express';

import BooksController from '../controllers/books.controller';
import priceHelper from '../helpers/bookPrice.helper';

class SimpleRoutes{
    private router : express.Router;
    constructor(router){
        this.router = router;
        this.routes();
    }
    private routes():void{
        this.router.post('/book', priceHelper, BooksController.add);
        this.router.get('/book', BooksController.get);
        this.router.get('/book/:id', BooksController.getById);
        this.router.delete('/book/:id', BooksController.remove);
        this.router.put('/book/:id', BooksController.update);
    }
}

export default SimpleRoutes;