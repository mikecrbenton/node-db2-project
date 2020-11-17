
exports.up = async function(knex) {
  await knex.schema.createTable("car-dealer", (table) => {
     table.increments("id")
     table.text("VIN").notNull().unique()
     table.text("make").notNull()
     table.text("model").notNull()
     table.integer("mileage").notNull()
     table.boolean("manual").defaultTo(false)
     table.text("title_status")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("car-dealer")
};
