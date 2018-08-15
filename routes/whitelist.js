const router = require('express').Router();
const ctrl = require('controllers/whitelist');

router.post('/', ctrl.insertNewRecord);
router.delete('/:userId', ctrl.removeUser);
router.get('/:userId/verifyPermission', ctrl.verifyPermission);

module.exports = exports = router;