const express = require("express");
const DevController = require("./controllers/DevControllers");
const LikeControllers = require("./controllers/LikeControllers");
const DislikeControllers = require("./controllers/DislikeControllers");

const routes = express.Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeControllers.store);
routes.post("/devs/:devId/dislikes", DislikeControllers.store);
module.exports = routes;
