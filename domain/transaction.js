const createTransaction = (sender, reciever, value) => {
    return {
        sender,
        reciever,
        value
    }
}

module.exports = {
    createTransaction
}
