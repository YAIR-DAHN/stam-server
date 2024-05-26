import calculationsService from '../services/calculations-service.js';

export default class CalculationsController {

    static async create(req, res) {
        try {
            const calculations = await calculationsService.create(req.body);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const calculations = await calculationsService.getAll();
            if (!calculations) {
                return res.status(404).json({ msg: "calculation not found" });
            }
            return res.status(200).json(calculations);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const calculations = await calculationsService.getById(req.id);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async getByUserId(req, res) {
        try {
            const calculations = await calculationsService.getByUserId(req.id);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }


    static async update(req, res) {
        console.log("ttue update");
        try {
            const calculations = await calculationsService.update(req.params.id, req.body);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
                console.log(calculations);
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const calculations = await calculationsService.deleteById(req.id);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async progress(req, res) {
        try {
            await calculationsService.update(req.params.id, req.body); //  עדכון בטבלת חישובים
            const calculations = await calculationsService.progress(req);
            if (!calculations) {
                return res.status(404).json({ msg: "calculations not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
   
}
