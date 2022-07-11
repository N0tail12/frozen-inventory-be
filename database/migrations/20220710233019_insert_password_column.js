exports.up = function (knex) {
  return knex.schema.alterTable("user", t => {
    t.string("password").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("user", t => {
    t.dropColumn("password");
  });
};
