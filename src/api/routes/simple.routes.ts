import express from 'express';

import SimpleController from '../controllers/simple.controller';

class SimpleRoutes{
    private router : express.Router;
    constructor(router){
        this.router = router;
        this.routes();
    }
    private routes():void{
        this.router.get('/', SimpleController.simple);
    }
}

export default SimpleRoutes;