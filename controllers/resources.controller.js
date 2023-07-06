const express = require('express')
const router = express.Router()

// TODO: Get all transactions
router.get('/', (req,res) => {
    res.send('ALL TRANSACTIONS')
})

// TODO: Get one transaction
router.get('/:id', (req,res) => {
    res.send('')
})

// TODO: Create new transactions
router.post('/', (req,res) => {
    res.send('')
})

// TODO: Delete a transaction
router.delete('/', (req,res) => {
    res.send('')
})

// TODO: Update a transaction
router.put('/', (req,res) => {
    res.send('')
})


module.exports = router;