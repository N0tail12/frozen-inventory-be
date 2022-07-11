exports.up = function (knex) {
  return knex.schema.createTable("category", t => {
    t.string("category_code").primary();
    t.string("category_name").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("category");
};
