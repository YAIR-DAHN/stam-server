import testsService from '../services/tests-service.js';
export default class TestController {

    static async create(req, res) {
        try {
            const tests = await testsService.create(req.body);
            if (!tests) {
                return res.status(404).json({ msg: error.message });
            }
            res.status(200).json(tests);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getAllTests(req, res) {
        try {
            const tests = await testsService.getAllTest();
            if (!tests) {
                return res.status(404).json({ msg: "tests not found" });
            }
            return res.status(200).json(tests);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
    // עדכון מבחן לפי מזהה
    static async TestUpdate(req, res) {
        try {
            const tests = await testsService.TestUpdate(req.id, req.body);
            if (!tests) {
                return res.status(404).json({ msg: "tests not found" });
            }
            return res.status(200).json(tests);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
    static async addQuest(req, res) {
        try {
            const tests = await testsService.addQuest(req.body);
            if (!tests) {
                return res.status(404).json({ msg: error.message });
            }
            res.status(200).json(tests);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getAllQuest(req, res) {
        try {
            const Quests = await testsService.getAllQuest();
            if (!Quests) {
                return res.status(404).json({ msg: "Quests not found" });
            }
            return res.status(200).json(Quests);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const quset = await testsService.getById(req.id);
            if (!quset) {
                return res.status(404).json({ msg: "quset not found" });
            }
            res.status(200).json(quset);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getByTest(req, res) {
        try {
            const quset = await testsService.getByTest(req.id);
            if (!quset) {
                return res.status(404).json({ msg: "quset not found" });
            }
            res.status(200).json(quset);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async update(req, res) {
        try {
            const quset = await testsService.updateQuest(req.id, req.body);
            if (!quset) {
                return res.status(404).json({ msg: "quset not found" });
            }
            res.status(200).json(quset);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    //קבלת תשובות מהמשתמשים
    static async addAnswer(req, res) {
        try {
            const answer = await testsService.addAnswer(req.body);
            if (!answer) {
                return res.status(404).json({ msg: "answer not found" });
            }
            res.status(200).json(answer);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getAllAnswer(req, res) {
        try {
            const answer = await testsService.getAllAnswer();
            if (!answer) {
                return res.status(404).json({ msg: "answer not found" });
            }
            res.status(200).json(answer);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getAnswerByUser(req, res) {
        try {
            const answer = await testsService.getAnswerByUser(req.id);
            if (!answer) {
                return res.status(404).json({ msg: "answer not found" });
            }
            res.status(200).json(answer);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

}
