const express = require('express')
const getCardController = require('../controllers/getCardController.js')
const getCardsController = require('../controllers/getCardsController.js')
const saveCardController = require('../controllers/saveCardController.js')
const deleteCardController = require('../controllers/deleteCardController.js')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({response: 'OK'})
})

router.get('/card/:id', getCardController)
router.get('/cards', getCardsController)
router.post('/card', saveCardController)
router.delete('/card/:id', deleteCardController)

module.exports = router