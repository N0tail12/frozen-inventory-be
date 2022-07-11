exports.up = function (knex) {
  return knex.schema.createTable("user", t => {
    t.increments("id").primary();
    t.string("name").notNull();
    t.string("email").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
