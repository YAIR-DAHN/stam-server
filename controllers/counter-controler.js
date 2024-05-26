import counterService from '../services/counter-service.js';
export default class CounterController {

    static async create(userData) {
        try {
            const login = await counterService.create(userData);
            if (!login) {
                return res.status(404).json({ msg: error.message });
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    static async getAll(req, res) {
        try {
            const login = await counterService.getAll();
            if (!login) {
                return res.status(404).json({ msg: "login not found" });
            }
            return res.status(200).json(login);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
    // בקשה לקבלת כמות התחברויות לפי סוג מכשיר
    static async filterByType(req, res) {
        try {
            const login = await counterService.filterByType(req.body);
            if (!login) {
                return res.status(404).json({ msg: "login not found" });
            }
            return res.status(200).json(login.length); // מחזיר רק את מספר ההתחברויות
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }

}
