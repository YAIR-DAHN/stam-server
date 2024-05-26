import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Users from "./user-model.js";
import calculations from "./calculations-model.js";


const dailyProgress = sequelize.define("dailyProgress", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calculationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pagesWrittenToday: {
        type: DataTypes.FLOAT,
    },
    hoursWorkedToday: {
        type: DataTypes.FLOAT,
    },
    writingRateToday: {
        type: DataTypes.FLOAT,
    },
    
    createdAt: {
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATEONLY
    }
});

dailyProgress.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

//   קישור מפתח זר לטבלת משתמשים ןחישובים
dailyProgress.belongsTo(Users, { foreignKey: 'userId' });
dailyProgress.belongsTo(calculations, { foreignKey: 'calculationId' });


export default dailyProgress;