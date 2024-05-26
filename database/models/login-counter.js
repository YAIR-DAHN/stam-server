// מונה כניסות לאתר
import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";



const LoginCounter = sequelize.define("counterLogin", {
    loginTo: {
        type: DataTypes.STRING
    },
    loginFrom: {
        type: DataTypes.STRING
    },
    loginUserName: {
        type: DataTypes.STRING
    },
    loginUserId: {
        type: DataTypes.STRING
    },
    loginBrowser: {
        type: DataTypes.STRING
    },
    loginOs: {
        type: DataTypes.STRING
    },
    loginDeviceType: {
        type: DataTypes.STRING
    },


});

export default LoginCounter;