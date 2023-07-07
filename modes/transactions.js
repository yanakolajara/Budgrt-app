const { v4: uuidV4} = require('uuid')

module.exports = [
    {
        id: uuidV4(),
        item: "income",
        amount: "3500",
        date: "July 6",
        from: 'Yanako Lajara',
        category: 'income',
    },
    {
        id: "123",
        item: "test",
        amount: "1500",
        date: "July 12",
        from: 'YNK TESTER',
        category: 'TEST',
    }
]