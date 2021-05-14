import * as express from 'express';

const {validateGroup} = require('../middleware/groupValidator');
const groupController = require('../controllers/group');
const router = express();

router.get('/all', groupController.getAllGroups);

router.get('/:id', groupController.getGroup);

router.post('/', validateGroup, groupController.createGroup);

router.put('/:id', validateGroup, groupController.updateGroup);

router.delete('/:id', groupController.deleteGroup);

module.exports = router;
