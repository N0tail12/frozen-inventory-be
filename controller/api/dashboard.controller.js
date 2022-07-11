const DashboardRepository = require("../../repository/dashboard.repository");
const Formatter = require("response-format");

const GetAllItem = async (req, res) => {
  try {
    let data = await DashboardRepository.getAllItem();
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetAllItem
};
