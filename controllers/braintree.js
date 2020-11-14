const braintree = require('braintree')
require('dotenv').config()



const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: 'c93a61755e60d4b5f38f7d1502354a00'
})


exports.generateToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(response)
        }
    })
}

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheClient = req.body.amount
    //charge the user
    let newTransaction = gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
            submitForSettlement: true
        }
    }, (error, result) => {
        if(error) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    })
}