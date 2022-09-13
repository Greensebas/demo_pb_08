const express = require ("express");
const productsRoutes = require ("./products/products.routes");
const usersRoutes = require("./users/users.routes");
const authorizer = require('../middlewares/authorizer');

const router = express.Router();

// router.use([authorizer, logger]); Se podrían poner más de un middleware de esta manera
router.use(authorizer)
router.use("/products" , productsRoutes);
router.use("/users" , usersRoutes);

module.exports = router;