const CategoryRepository = require("../../repository/category.repository");
const Formatter = require("response-format");

const GetAllCategory = async (req, res) => {
  try {
    let data = await CategoryRepository.getAllCategory();
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const AddCategory = async (req, res) => {
  try {
    let { category_name } = req.body;
    let data = await CategoryRepository.addCategory(category_name);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const UpdateCategory = async (req, res) => {
  try {
    let payload = req.body;
    let data = await CategoryRepository.updateCategory(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const DeleteCategory = async (req, res) => {
  try {
    let { id } = req.query;
    let data = await CategoryRepository.deleteCategory(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetAllCategory,
  AddCategory,
  UpdateCategory,
  DeleteCategory
};
