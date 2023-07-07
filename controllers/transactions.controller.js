const express = require('express')
const transactions = require('../modes/transactions')
const router = express.Router()
const { v4: uuidV4} = require('uuid')


router.get('/', (req,res) => {
    res.json(transactions)
})


router.get('/:id', (req,res) => {
    const transactionId = req.params.id
    const foundTransaction = transactions.find(x => x.id == transactionId)
    if(foundTransaction){
        res.json(foundTransaction)
    }else{
        res.status(404).json({message: 'Transaction not found'})
    }
})


router.post('/', (req,res) => {
    let newTransaction = req.body
    newTransaction.id = uuidV4()
    transactions.push(newTransaction)
    res.send(transactions)
})


router.delete('/:id', (req,res) => {
    const transactionId = req.params.id
    const foundTransaction = transactions.findIndex(x => x.id == transactionId)
    if(foundTransaction > -1){
        transactions.splice(foundTransaction, 1)
        res.send(transactions)
    }else{
        res.status(404).send('Transaction not found.')
    }
})


router.put('/:id', (req,res) => {
    const transactionId = req.params.id
    const foundTransaction = transactions.findIndex(x => x.id == transactionId)
    if(foundTransaction > -1){
        const newTransaction = req.body
        transactions.splice(foundTransaction, 1, newTransaction)
        res.send(transactions)
    }else{
        res.status(404).json({message: 'Transaction not found'})
    }
})


module.exports = router;