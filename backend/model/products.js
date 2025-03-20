const Joi = require("joi");

class ProductsModel {
    constructor(productId, productName, categoryID, price, Image_path) {
        if (arguments.length === 0) {
           this.productId = productId;
            this.productName = productName;
            this.categoryID = categoryID;
            this.price = price;
            this.Image_path = Image_path;
        }
        else if (arguments.length === 1) {
            const product = arguments[0];
            this.productId = product.productId;
            this.productName = product.productName;
            this.categoryID = product.categoryID;
            this.price = product.price;
            this.Image_path = product.Image_path;
        }
        else
            throw "ProductModel structure error"
    }
    toString() {
        return `${this.productId} -- ${this.productName} --`
    }

    static #postValidationScheme = Joi.object({
        product: Joi.number(),
        productName: Joi.string().required(),
        Image_path: Joi.any().required(),
        price: Joi.any().required(),
        categoryID: Joi.number().required(),
    });

    validatePost() {
        const result = ProductsModel.#postValidationScheme.validate(this, { abortEarly: false });
        return result.error ? result.error.details : {};
    }

    static #putValidationScheme = Joi.object({
        productId: Joi.number(),
        productName: Joi.string().required(),
        Image_path: Joi.string().required(),
        price: Joi.any().required(),
    });

    validatePut() {
        const result = ProductsModel.#putValidationScheme.validate(this, { abortEarly: false });
        return result.error ? result.error.details : {};
    }
}
module.exports = ProductsModel;