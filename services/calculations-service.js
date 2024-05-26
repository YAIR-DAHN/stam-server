import { Calculations, DailyProgress } from "../database/index.js";
import { Op } from "sequelize";

const create = async (newCalculations) => {
    try {
        const calculations = await Calculations.create(newCalculations);
        if (calculations) {
            return calculations;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const getAll = async () => {
    try {
        const calculations = await Calculations.findAll(); // SELECT * FROM calculations; 
        if (calculations.length > 0) {
            return calculations;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const calculations = await Calculations.findByPk(id);
        if (calculations) {
            return calculations;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const getByUserId = async (id) => {
    try {
        const calculations = await Calculations.findAll({
            where: {
                userId: id
            }
        });
        if (calculations.length > 0) {
            return calculations;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}


const update = async (id, calculationsUpdated) => {
    try {
        const calculations = await getById(id);
        if (!calculations) {
            return null;
        }
        calculations.set(calculationsUpdated);
        await calculations.save();
        return calculations;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const calculations = await getById(id);

        if (!calculations) {
            return null;
        }
        await calculations.destroy();
        return calculations;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAll = async () => {
    try {
        const calculations = await Calculations.destroy({
            where: {},
            truncate: false
        });
        if (calculations) {
            return calculations;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    } destroy
}

const progress = async (progress) => {
    try {
        const calculations = await getById(progress.id);
        if (!calculations) {
            return null;
        }
        const dailyProgress = await DailyProgress.create(progress.body);
        if (dailyProgress) {
            return dailyProgress;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}


export default {
    create,
    getAll,
    getById,
    getByUserId,
    update,
    deleteById, 
    progress,
}