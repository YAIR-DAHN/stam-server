import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";

const PasswordRecovery = sequelize.define('PasswordRecovery', {
  
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        
    },
    verificationCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isUsed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

});

export default PasswordRecovery;
