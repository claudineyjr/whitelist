const router = require('express').Router();
const ctrl = require('controllers/user');

router.post('/', ctrl.insertNewRecord);
router.get('/', ctrl.getUser);
router.delete('/:userId', ctrl.removeUser);
router.get('/:userId', ctrl.getUser);

module.exports = exports = router;