import express from 'express';
import userController from '../controllers/user-controller.js';
import PasswordRecovery from '../controllers/password-recovery-controler.js';
import adminAuth from '../middlewares/adminAuth.js';
import userAuth from '../middlewares/userAuth.js';

const router = express.Router();

export default class UserRouter {
    constructor() {
        router.get('/', adminAuth, userController.getAll);
        router.get('/:id', userAuth, userController.getById);
        router.post('/', userController.create);
        router.put('/', userAuth, userController.update); 
        router.delete('/:id',adminAuth, userController.delete);
        router.post('/login', userController.login);
        router.post('/register', userController.register);
        router.post('/recoveryPass', PasswordRecovery.findUser); // חיפוש משתמש לפי מייל ושליחת קוד אימות\
        router.post('/recoveryPass/verify', PasswordRecovery.verifyCode); // בדיקת קוד אימות
    }

    getRouter() {
        return router;
    }
}

