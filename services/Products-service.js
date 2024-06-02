import { product, productCategoryMapping, category, feedback, } from "../database/index.js";
import { Op } from "sequelize";

// const create = async (newProd) => {
//     try {
//         const createProd = await product.create(newProd);
//         const mappingCategory = await productCategoryMapping.create(newProd);

//         if (createProd && mappingCategory) {
//             return mappingCategory;
//         }
//         return null;
//     } catch (error) {
//         throw new Error(error);
//     }
// }

const create = async (newProd, categories) => {
    try {
        const createProd = await product.create(newProd);
        if (!createProd) {
            throw new Error('Failed to create product');
        }

        for (let category of categories) {
            const mappingCategory = await productCategoryMapping.create({ productIdFK: createProd.id, categoryIdFK: category.id });
            if (!mappingCategory) {
                throw new Error(`Failed to map product to category: ${category.name}`);
            }
        }

        return createProd;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create product and map to categories');
    }
}

const getAllProd = async () => {
    try {
        const products = await product.findAll(); // SELECT * FROM products; 
        if (products.length > 0) {
            return products;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAllProducts = async () => {
    try {
        const products = await product.findAll();
        if (!products) {
            throw new Error('No products found');
        }

        const productsWithCategories = await Promise.all(products.map(async (prod) => {
            const categories = await productCategoryMapping.findAll({
                where: { productIdFK: prod.id },
                include: [{ model: category, as: 'category' }]
            });

            return { ...prod.dataValues, categories };
        }));

        return productsWithCategories;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get products and their categories');
    }
}

const createCategory = async (newCategory) => {
    try {
        const createCategory = await category.create(newCategory);
        if (!createCategory) {
            throw new Error('Failed to create category');
        }
        return createCategory;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create category');
    }
}

const getAllCategories = async () => {
    try {
        const categories = await category.findAll();
        if (categories.length > 0) {
            return categories;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const getProdByCategory = async (categoryId) => {
    try {
        const products = await productCategoryMapping.findAll({
            where: {
                categoryIdFK: categoryId
            }
        });
        if (products.length > 0) {
            return products;
        }
        return null;
    }
    catch (error) {
        throw new Error(error);
    }
}

const getProductById = async (id) => {
    try {
        const products = await product.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }

        const categories = await productCategoryMapping.findAll({
            where: { productIdFK: id },
            include: [{ model: category, as: 'category' }]
        });

        return { ...products.dataValues, categories };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get product and its categories');
    }
}




export default {
    create,
    getAllProd,
    getProdByCategory,
    getProductById,
    getAllProducts,
    getAllCategories,
    createCategory
    // getByUserId,
    // update,
    // deleteById, 
    // progress,
    // getProgress
}