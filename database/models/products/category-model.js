import { sequelize } from "../../index.js";
import { DataTypes, literal } from "sequelize";

// import { UUIDV4 } from "uuid";


const category = sequelize.define("category", {
    categoryName: {
        type: DataTypes.STRING,
    },
    categoryDescription: {
        type: DataTypes.STRING,
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

category.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}



export default category;