const Bluebird = require("bluebird");
const knex = require("knex");

function createKnexClient({ connectionString, migrationsTableName }) {
  console.log(connectionString);
  const client = knex(connectionString);

  const migrationOptions = {
    tableName: migrationsTableName || "knex_migrations",
  };

  return Bluebird.resolve(client.migrate.latest(migrationOptions)).then(
    () => client
  );
}

module.exports = createKnexClient;
