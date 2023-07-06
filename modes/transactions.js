const { v4: uuidV4} = require('uuid')

module.exports = [
    {
        id: uuidV4(),
        item: "income",
        amount: 3500,
        date: '07/06/2023',
        from: 'Yanako Lajara',
        category: 'income',
    },
    {
        id: 123,
        item: "test",
        amount: 1500,
        date: '07/06/2023',
        from: 'YNK TESTER',
        category: 'TEST',
    }
]