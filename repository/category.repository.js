const knex = require("../config/database");

const getAllCategory = () => {
  return knex.select("*").from("category");
};

module.exports = {
  getAllCategory
};
