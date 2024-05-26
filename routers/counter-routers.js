//הפנייה להצגת נתוני כניסות לאתר
import express from 'express';
import counterController from '../controllers/counter-controler.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

export default class CounterRouter {
    constructor() {
        // router.get('/', adminAuth, counterController.getAll);
        router.get('/', counterController.getAll);
        router.post('/', adminAuth, counterController.filterByType);
    }
    getRouter() {
        return router;
    }
}

