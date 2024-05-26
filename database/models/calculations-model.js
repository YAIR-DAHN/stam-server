import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Users from "./user-model.js";

// import { UUIDV4 } from "uuid";


const calculations = sequelize.define("calculations", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookType: {
        type: DataTypes.STRING,
    },
    booksAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    booksLeft: {
        type: DataTypes.FLOAT,
    },
    pagesPerBook: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pagesWritten: {
        type: DataTypes.FLOAT,
    },
    profitPerPage: {
        type: DataTypes.FLOAT,
    },
    hoursPerDay: {
        type: DataTypes.FLOAT,
    },
    writingRate: {
        type: DataTypes.FLOAT,
    },
    workdaysPerWeek: {
        type: DataTypes.STRING,
    },
    estimatedTime: {
        type: DataTypes.DATEONLY,
    },
    averageProfitPerHour: {
        type: DataTypes.FLOAT,
    },
    createdAt: {
        type: DataTypes.DATEONLY
        // allowNull defaults to true
    },
    updatedAt: {
        type: DataTypes.DATEONLY
        // allowNull defaults to true
    }
});

calculations.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

// קישור מפתח זר לטבלת משתמשים
calculations.belongsTo(Users, { foreignKey: 'userId' });


export default calculations;