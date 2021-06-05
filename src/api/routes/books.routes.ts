import express from 'express';

import BooksController from '../controllers/books.controller';

class SimpleRoutes{
    private router : express.Router;
    constructor(router){
        this.router = router;
        this.routes();
    }
    private routes():void{
        this.router.post('/book', BooksController.add);
        this.router.get('/book', BooksController.get);
        this.router.delete('/book/:id', BooksController.remove)
        this.router.put('/book/:id', BooksController.update);
    }
}

export default SimpleRoutes;