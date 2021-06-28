require("dotenv").config();

const koa = require('koa');
const port = parseInt(process.env.PORT) || 3000;
const bodyparser = require('koa-bodyparser')({
    enableTypes:['json']
});

const app = new koa();

const NetworkRoutes = require('./network/network.route');
const TransactionRoute = require('./transaction/transaction.route');
const BlockchainRoute = require('./block/blockchain.route');

app.use(bodyparser);
app.use(NetworkRoutes.routes(), NetworkRoutes.allowedMethods());
app.use(TransactionRoute.routes(), TransactionRoute.allowedMethods());
app.use(BlockchainRoute.routes(), BlockchainRoute.allowedMethods());

app.listen(port);
console.log(`listening on port ${port}`);

module.exports = app;
