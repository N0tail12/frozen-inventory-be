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

module.exports = {
  GetAllCategory
};
