const knex = require("../config/database");

const getAllItem = () => {
  return knex.select("*").from("stock").leftJoin("category", "category_id", "category_code");
};

module.exports = {
  getAllItem
};
