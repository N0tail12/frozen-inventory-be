const express = require("express");
const router = express.Router();
const CategoryController = require("../../controller/api/category.controller");

router.route("/category").get(CategoryController.GetAllCategory);

module.exports = router;
