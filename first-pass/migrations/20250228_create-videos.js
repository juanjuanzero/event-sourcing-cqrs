exports.up = (knex) =>
  knex.schema.createTable("videos", (table) => {
    table.increments();
    table.string("owner_id");
    table.string("name");
    table.string("decription");
    table.string("transcoding_status");
    table.integer("view_count").defaultsTo(0);
  });

exports.down = (knex) => knex.schema.dropTable("videos");
