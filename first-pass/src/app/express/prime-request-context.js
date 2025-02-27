const uuid = require('uuid')
function primeRequestConstext(req, res, next) {
    req.context = {
        traceId : uuid()
    }
    next()
}

module.exports = primeRequestConstext