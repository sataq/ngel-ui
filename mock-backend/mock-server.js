const jsonServer = require("json-server");

module.exports = function startMockServer(port) {
    console.log("Starting JSON Server");

    const server = jsonServer.create();
    server.use(jsonServer.defaults());
    server.use(jsonServer.rewriter(require("./routes.json")));
    
    const db = require("./db.js");
    const router = jsonServer.router(db()); // Relative to project root

    server.use(router);
    server.listen(port);
};