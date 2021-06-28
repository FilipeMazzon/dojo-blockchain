const BlockchainController = require('./blockchain.controller');

const Router = require('@koa/router');
const router = new Router({prefix: '/blockchain'})

router.get('/', BlockchainController.getChain);
router.get('/validate', BlockchainController.validateNetwork);
router.post('/block', BlockchainController.createBlock);
router.post('/consensus', BlockchainController.consensus);


module.exports = router
