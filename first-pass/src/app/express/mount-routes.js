function mountRoutes(app, config) {
    app.use('/', config.homeApp.router);
    app.use('/record-vieweing', config.recordViewinsApp.router)
}

module.exports = mountRoutes