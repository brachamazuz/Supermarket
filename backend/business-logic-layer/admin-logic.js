const dal = require("../data-access-layer/dal");

async function addProductAsync(addProduct) {
    const result = `
    insert into products (productName, price, Image_path, categoryID)
    values 
    ('${addProduct.productName}', '${addProduct.price}', '${addProduct.Image_path}', '${addProduct.categoryID}')`
    const addProducts = dal.executeQueryAsync(result);
    return addProducts;
}

async function updateProductAsync(product) {
    console.log( product.productName );
   
    console.log( product);
    return await dal.executeQueryAsync(
        "update products set productName='" + product.productName + "', price='" + product.price + "', Image_path='" + product.Image_path + "' where productId= '" + product.productId +"'" );
  
}


module.exports = {
    addProductAsync,
    updateProductAsync
};