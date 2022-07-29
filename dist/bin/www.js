"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
var http_1 = require("http");
var port = Number(process.env.PORT) || 3000;
var server = (0, http_1.createServer)(app_1.default);
server.listen(port, function () {
    console.log("server activated on port ".concat(port, "."));
});
exports.default = server;
