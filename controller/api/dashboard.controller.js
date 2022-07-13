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

const GetItemByID = async (req, res) => {
  try {
    let { id } = req.query;
    let data = await DashboardRepository.getItemById(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const AddItem = async (req, res) => {
  try {
    let payload = req.body;
    let data = await DashboardRepository.addItem(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const UpdateItem = async (req, res) => {
  try {
    let payload = req.body;
    let data = await DashboardRepository.updateItem(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const DeleteItemByID = async (req, res) => {
  try {
    let { id } = req.query;
    let data = await DashboardRepository.deleteItemById(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badGateway(error));
  }
};

module.exports = {
  GetAllItem,
  GetItemByID,
  AddItem,
  UpdateItem,
  DeleteItemByID
};
