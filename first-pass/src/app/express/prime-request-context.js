const uuid = require("uuid");
function primeRequestConstext(req, res, next) {
  req.context = {
    traceId: uuid.v1(),
  };
  next();
}

module.exports = primeRequestConstext;
