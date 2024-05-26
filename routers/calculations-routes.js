import express from 'express';
import calculationsController from '../controllers/calculations-controller.js';
// import adminAuth from '../middlewares/adminAuth.js';
import userAuth from '../middlewares/userAuth.js';

const router = express.Router();

export default class UserRouter {
    constructor() {
        // router.get('/all', adminAuth, calculationsController.getAll);
        router.post('/', userAuth, calculationsController.create);
        router.get('/all', calculationsController.getAll);
        router.get('/id/:id', userAuth, calculationsController.getById);
        router.get('/user/:id', userAuth, calculationsController.getByUserId);
        router.put('/:id', userAuth, calculationsController.update); 
        router.put('/progress/:id', userAuth, calculationsController.progress); // עדכון התקדמות
        router.get('/progress/:id', userAuth, calculationsController.getProgress); // קבלת התקדמות
        // router.delete('/:id',adminAuth, calculationsController.delete);
        router.delete('/:id', userAuth, calculationsController.delete);
   
    }

    getRouter() {
        return router;
    }
}

