const express = require("express");

const path = require("path");
const fs = require("fs");

const entityLogic = require("../business-logic-layer/entity-logic");
const Credentials = require("../model/credentials");
const Registration = require("../model/registration");


const router = express.Router();

// router.post("/email", async (request, response) => {
//     try {
//         const doPost = await entityLogic.doPost();
//         response.send(doPost);
//     }
//     catch (error) {
//         response.status(500).send(error);
//     }
// });


router.get("/images/:imageName", (request, response) => {
    try {

        const imageName = request.params.imageName;

        // Logic: 
        let imageFile = path.join(__dirname, "../images", imageName);
        //  if (!fs.existsSync(imageFile)) imageFile = locations.notFoundImageFile;

        // Success: 
        response.sendFile(imageFile);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/product", async (request, response) => {

    try {

        const allProduct = await entityLogic.getAllProduct();
        response.send(allProduct);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
router.post("/login", async (request, response) => {
    try {
        const credentials = new Credentials(request.body);
        const errors = credentials.validate();
        if (errors) return response.status(400).send(errors);

        const loggedInUser = await entityLogic.loginAsync(credentials);
        if (!loggedInUser) return response.status(401).send("Incorrect username_email or password.");
        //else
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// router.get("/login", async (request, response) => {

//     try {
//         // const response=await ...
//         const loggedInUser = await entityLogic.loginAsync(loggedInUser);
//         response.send(loggedInUser);
//     }
//     catch (error) {
//         response.status(500).send(error);
//     }
// });

router.post("/register", async (request, response) => {
    try {
        const reg = new Registration(request.body);
        console.log('line 73');
        console.log(reg);
        // const errors = reg.validate();
        const errors = false;
        if (errors) {
            console.log(errors);
            // response.status(400).json(errors);
        } else {
            try {
                const result = await entityLogic.registerAsync(reg);
                console.log(result);
                response.json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
});


// router.post('/login', (req, res) => {
//     const { id, password } = req.body.user;
//     if (validateID({ id }) && password && password.length > 4) {
//         con.getQuery(`SELECT first_name FROM users WHERE id='${id}' AND password='${password}'`,
//          (data, err) => {
//             if (!err && data.length > 0) {
//                 con.getQuery(`SELECT * FROM admins WHERE id='${id}'`, (data, err) => {
//                     res.cookie('tokenid', createToken({ id }), { maxAge: MAX_AGE });
//                     if (!err && data.length > 0)
//                         res.status(200).send({ success: true, toUrl: '/admin' });
//                     else
//                         res.status(200).send({ success: true, toUrl: '/home' });
//                 });
//             } else {
//                 res.status(400).send({ success: false, message: ' Login Failes' });
//             }
//         });
//     } else {
//         res.status(400).send({ success: false, message: 'Invalid Data' });
//     }
// });

router.get("/", async (request, response) => {
    try {
        // const response=await ...
        response.send("OK");
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;