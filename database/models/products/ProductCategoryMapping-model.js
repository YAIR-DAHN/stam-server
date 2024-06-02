import { sequelize } from "../../index.js";
import { DataTypes, literal } from "sequelize";
import products from "./products-model.js";
import categories from "./category-model.js";

// import { UUIDV4 } from "uuid";


const categoryMapping = sequelize.define("categoryMapping", {

    productIdFK: {
        type: DataTypes.INTEGER,
    },
    categoryIdFK: {
        type: DataTypes.INTEGER,
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

categoryMapping.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

// קישור מפתח זר לטבלת משתמשים
categoryMapping.belongsTo(products, { foreignKey: 'productIdFK' });
categoryMapping.belongsTo(categories, { foreignKey: 'categoryIdFK' });


export default categoryMapping;