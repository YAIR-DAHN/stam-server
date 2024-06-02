import ProductsService from "../services/Products-service.js";

export default class ProductsController {

    static async create(req, res) {
        try {
            const product = await ProductsService.create(req.body, req.body.categories);
            if (!product) {
                return res.status(404).json({ msg: "product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
// static async getProductById(id) {
//     try {
//         const product = await product.findById(id);
//         if (!product) {
//             throw new Error('Product not found');
//         }

//         const categories = await productCategoryMapping.findAll({
//             where: { productId: id },
//             include: [{ model: Category, as: 'category' }]
//         });

//         return { ...product.dataValues, categories };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Failed to get product and its categories');
//     }
// }
    static async getAllProd(req, res) {
        try {
            const product = await ProductsService.getAllProducts();
            if (!product) {
                return res.status(404).json({ msg: "products not found" });
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }

   static async getProductById(req, res) {
    console.log("getProductById");
        try {
            const product = await ProductsService.getProductById(req.params.id);
            if (!product) {
                throw new Error('Product not found');
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const product = await ProductsService.getById(req.id);
            if (!product) {
                return res.status(404).json({ msg: "product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async update(req, res) {
        console.log("ttue update");
        try {
            const calculations = await ProductsService.update(req.params.id, req.body);
            if (!calculations) {
                return res.status(404).json({ msg: "product not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const calculations = await ProductsService.deleteById(req.id);
            if (!calculations) {
                return res.status(404).json({ msg: "product not found" });
            }
            res.status(200).json(calculations);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }


    static async getAllCategories(req, res) {
        try {
            const categories = await ProductsService.getAllCategories();
            if (!categories) {
                return res.status(404).json({ msg: "categories not found" });
            }
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async createCategory(req, res) {
        try {
            const category = await ProductsService.createCategory(req.body);
            if (!category) {
                return res.status(404).json({ msg: "category not found" });
            }
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    // static async progress(req, res) {
    //     try {
    //         await ProductsService.update(req.params.id, req.body); //  עדכון בטבלת חישובים
    //         const calculations = await ProductsService.progress(req);
    //         if (!calculations) {
    //             return res.status(404).json({ msg: "calculations not found" });
    //         }
    //         res.status(200).json(calculations);
    //     } catch (error) {
    //         res.status(500).json({ msg: error.message });
    //     }
    // }
   
    // static async getProgress(req, res) {
    //     try {
    //         const calculations = await ProductsService.getProgress(req.id, req.params.id);
    //         if (!calculations) {
    //             return res.status(404).json({ msg: "calculations not found" });
    //         }
    //         res.status(200).json(calculations);
    //     } catch (error) {
    //         res.status(500).json({ msg: error.message });
    //     }
    // }
}
