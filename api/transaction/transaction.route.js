const TransactionController = require('./transaction.controller');

const Router = require('@koa/router');
const router = new Router({ prefix: '/transaction' })

router.get('/', TransactionController.getTransaction);
router.post('/', TransactionController.insertTransaction);
router.del('/', TransactionController.clearTransaction);


module.exports = router
