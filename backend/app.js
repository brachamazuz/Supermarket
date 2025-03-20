const express = require("express");
const cors = require("cors");

const adminController=require("./controllers-layer/admin-controller");
const entityController=require("./controllers-layer/entity-controller");

const server = express();

server.use(cors());
server.use(express.json());


server.use("/admin", adminController);
server.use("/entity", entityController);

server.use("*", (req, res) => {
    res.status(404).send(`Route not found ${req.originalUrl}`);
});

server.listen(4000, () => {
    console.log("Listening on 4000");
}).on("error", (err) => {
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else 
        console.log("Error: Unknown error");
});