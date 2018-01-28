// title - text
// list_author - object
// total_pages - integer
// name_publishing - text
// year - text
// date - datetime
// img - string


exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) => {
      table.increments();
      table.text('title').notNullable();
      table.array('list_author');
      table.integer('total_pages').notNullable();
      table.text('name_publishing').notNullable();
      table.text('year').notNullable();
      table.datetime('date').notNullable();
      table.text('img');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
