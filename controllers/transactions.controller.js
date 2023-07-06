const express = require('express')
const transactions = require('../modes/transactions')
const router = express.Router()


router.get('/', (req,res) => {
    res.json(transactions)
})


router.get('/:id', (req,res) => {
    const transactionId = req.params.id
    const foundTransaction = transactions.find(x => x.id === Number(transactionId))
    if(foundTransaction){
        res.json(foundTransaction)
    }else{
        res.status(404).send('Transaction not found')
    }
})


router.post('/', (req,res) => {
    const newTransaction = req.body
    transactions.push(newTransaction)
    res.send(transactions)
})

// TODO: Delete a transaction
router.delete('/:id', (req,res) => {
    const transactionId = req.params.id
    const foundTransaction = transactions.findIndex(x => x.id === Number(transactionId))
    if(foundTransaction > -1){
        transactions.splice(foundTransaction, 1)
        res.send(transactions)
    }else{
        res.status(404).send('Transaction not found.')
    }
})

// TODO: Update a transaction
router.put('/:id', (req,res) => {
    res.send('')
})


module.exports = router;