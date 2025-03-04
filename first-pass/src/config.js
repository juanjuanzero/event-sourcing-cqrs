const createKnexClient = require("./knex-client");
const createHomeApp = require("./app/home");

function createConfig({ env }) {
  console.log(env);
  const db = createKnexClient({
    connectionString: env.databaseUrl,
  });
  const homeApp = createHomeApp({ db });
  return {
    env,
    homeApp,
  };
}

module.exports = createConfig;
