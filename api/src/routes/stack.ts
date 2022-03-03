import express from 'express';

const {validateStack} = require('../middleware/stackValidator');
const stackController = require('../controllers/stack');
const router = express();

router.get('/all', stackController.getAllStacks);

router.get('/all/:groupID', stackController.getAllStacksInGroup);

router.get('/:slug', stackController.getStack);

router.post('/', validateStack, stackController.createStack);

router.put('/:id', validateStack, stackController.updateStack);

router.delete('/:id', stackController.deleteStack);

module.exports = router;
