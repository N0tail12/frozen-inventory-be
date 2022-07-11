exports.up = function (knex) {
  return knex.schema.createTable("stock", t => {
    t.string("stock_name").notNull();
    t.string("stock_code").notNull().primary();
    t.string("stock_price").notNull();
    t.string("stock_lot_number").notNull();
    t.date("manufacture_date").notNull();
    t.date("expiration_date").notNull();
    t.timestamp("created_at").defaultTo(knex.fn.now()).notNull();
    t.string("category_id").notNull();
    t.foreign("category_id").references("category.category_code");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stock");
};
