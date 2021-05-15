import * as express from 'express';

const {validateCard} = require('../middleware/cardValidator')
const cardController = require('../controllers/card');
const router = express();

router.get('/all/:stackID', cardController.getAllCardsInStack);

router.get('/:id', cardController.getCard);

router.post('/', validateCard, cardController.createCard);

router.put('/:id', validateCard, cardController.updateCard);

router.delete('/:id', cardController.deleteCard);

module.exports = router;
