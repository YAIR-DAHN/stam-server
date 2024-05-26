import { LoginCounter } from "../database/index.js";

const create = async (newLogin) => {
    try {
        const Counter = await LoginCounter.create(newLogin);
        if (Counter) {
            return Counter;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAll = async () => {
    try {
        const Counter = await LoginCounter.findAll();
        if (Counter.length > 0) {
            return Counter;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const filterByType = async (type) => {
    try {
        const Counter = await LoginCounter.findAll({ where: type });
        if (Counter.length > 0) {
            return Counter;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}


export default { create, getAll, filterByType };