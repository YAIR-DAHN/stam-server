import userService from '../services/user-service.js';

export default class UserController {
    static async getAll(req, res) {
        try {
            const users = await userService.getAll();
            if (!users) {
                return res.status(404).json({ msg: "Users not found" });
            }
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const user = await userService.getById(req.id);
            // const user = await userService.getById(req.params.id);
            // const userId = req.headers.authorization;
            // const user = await userService.getById(userId);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async create(req, res) {
        try {
            const user = await userService.create(req.body);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async update(req, res) {
        try {
            const user = await userService.update(req.id, req.body);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const user = await userService.deleteById(req.id);
            if (!user) {
                return res.status(401).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async login(req, res) {
        try {
            const user = await userService.login(req.body);
            if (!user) {
                return res.status(401).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async register(req, res) {
        try {
            const user = await userService.register(req.body);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}
