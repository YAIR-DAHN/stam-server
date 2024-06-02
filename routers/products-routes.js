import express from 'express';
import ProductsController from '../controllers/products-controller.js';
import adminAuth from '../middlewares/adminAuth.js';
import userAuth from '../middlewares/userAuth.js';

const router = express.Router();

export default class ProductsRouter {
    constructor() {
        router.get('/', ProductsController.getAllProd);
        // router.get('/:id', userAuth, ProductsController.getById);
        router.post('/', adminAuth, ProductsController.create);
        router.get('/id/:id', ProductsController.getProductById);
        router.get('/categories', ProductsController.getAllCategories);
        router.post('/categories', ProductsController.createCategory);
        


        // router.put('/', userAuth, ProductsController.update); 
        // router.delete('/:id',adminAuth, ProductsController.delete);
        // router.post('/login', ProductsController.login);
        // router.post('/register', ProductsController.register);
    
    }

    getRouter() {
        return router;
    }
}
