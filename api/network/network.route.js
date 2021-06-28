const NetworkController = require('./network.controller');

const Router = require('@koa/router');
const router = new Router({ prefix: '/network' })

router.post('/join', NetworkController.joinNetwork);

module.exports = router;
