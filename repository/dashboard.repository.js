const knex = require("../config/database");

const getAllItem = () => {
  return knex.select("*").from("stock").leftJoin("category", "category_id", "category_code");
};

const getItemById = id => {
  return knex.select("*").from("stock").where({ stock_code: id });
};

module.exports = {
  getAllItem,
  getItemById
};
