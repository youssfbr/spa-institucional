const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('products.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port);