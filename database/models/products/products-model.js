import { sequelize } from "../../index.js";
import { DataTypes, literal } from "sequelize";

// import { UUIDV4 } from "uuid";


const products = sequelize.define("products", {
    productName: {
        type: DataTypes.STRING,
    },
    productDescription: {
        type: DataTypes.STRING,
    },
    productUrlImage: {
        type: DataTypes.STRING,
    },
    productPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    productLink: {
        type: DataTypes.STRING,
    },
    // productCategoryFK: {
    //     type: DataTypes.INTEGER,
    // },
    productRating: {
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

products.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}



export default products;