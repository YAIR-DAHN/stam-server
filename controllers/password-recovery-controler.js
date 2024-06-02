// ייבוא המודולים הנדרשים
import PasswordRecovery from '../services/password-recovery-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class CounterController {

    //טיפול בבקשה לאיפוס סיסמה ושליחת קוד אימות
    static async findUser(req, res) {
        try {
            const find = await PasswordRecovery.findUser(req.body);
            if (!find) {
                res.status(200).json({msg: "במידה והמשתמש קיים ישלח קוד אימות"});
            }
            else {
                res.status(200).json({msg: "במידה והמשתמש קיים ישלח קוד אימות"});
            }
        }
        catch (error) {
            console.log('error', error);
            res.status(500).json({msg: "תקלה בניסיון לאיפוס סיסמה, נסה שוב מאוחר יותר"});
        }
    }

    //טיפול בקבלת קוד האימות מהמשתמש
    static async verifyCode(req, res){
        try{
            const verify = await PasswordRecovery.verifyCode(req.body);
            if(verify){

                //כניסה לאתר באמצעות קוד אימות
                const login = await PasswordRecovery.login(verify);
                res.status(200).json(login);
            }
            else{
                res.status(401).json({msg: "הקוד שגוי"});
            }
        }
        catch(error){
            console.log('לא הצלחנו לבצע אימות ', error);
            res.status(500).json({msg: "תקלה בניסיון לאימות קוד, נסה שוב מאוחר יותר"});
        }
    }
}
