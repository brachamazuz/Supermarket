const express = require("express");


const adminLogoc = require("../business-logic-layer/admin-logic");

const router = express.Router();

const path = require("path");
const { response } = require("express");
const ProductsModel = require("../model/products");
const { request } = require("http");


router.post("/addProduct", async (request, response) =>{
    try{
        const addProduct = new ProductsModel(request.body);
      //  const errors = addProduct.validatePost();
      const errors = false;
        if(errors){
            console.log(errors);
           // response.status(400).json(errors);

        } else {
            try {
                const result = await adminLogoc.addProductAsync(addProduct);
                console.log(result);
                
                response.json(result);
            } catch (error) {
                console.log(error);
                response.status(400).json(error.message);
            }
        }
      } catch (error) {
        response.status(500).send(error.message);
    }
})


// router.put("/:id", async (request, response) => {
//     try {

//         //  const productToUpdate = new ProductsModel(request.body);
//         // const error = productToUpdate.validatePut();
//         console.log(error)
//         // const error = false;
//         if (error || error == {}){
//             console.log("if");
//             response.status(400).send(error);
//         }
//         else {
//             console.log("else");
//             productToUpdate.productId = request.params.id;
//           //  const result =
//              await adminLogoc.updateProductAsync(productToUpdate);
             
//             response.send(productToUpdate);
//         }
//     } catch (error) {
//         console.log(error);
//         response.status(500).send();
//     }
// });
router.put("/:id", async (request, response) => {
    try {

        //  const productToUpdate = new ProductsModel(request.body);
        // const error = productToUpdate.validatePut();
        console.log(error)
        // const error = false;
        if (error || error == {}){
            console.log("if");
            response.status(400).send(error);
        }
        else {
            console.log("else");
            productToUpdate.productId = request.params.id;
          //  const result =
             await adminLogoc.updateProductAsync(productToUpdate);
             
            response.send(productToUpdate);
        }
    } catch (error) {
        console.log(error);
        response.status(500).send();
    }
});


module.exports = router;