import { sequelize } from "../../index.js";
import { DataTypes, literal } from "sequelize";
import Users from "../user-model.js";
import Products from "./products-model.js";

// import { UUIDV4 } from "uuid";


const feedback = sequelize.define("feedback", {
    productIdFK: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userIdFK: {
        type: DataTypes.INTEGER,
    },
    feedbackText: {
        type: DataTypes.STRING,
    },
    feedbackRating: {
        type: DataTypes.FLOAT,
    },
    certifiedFeedback: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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

feedback.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

// קישור מפתח זר לטבלת משתמשים
feedback.belongsTo(Users, { foreignKey: 'userIdFK' });
feedback.belongsTo(Products, { foreignKey: 'productIdFK' });


export default feedback;