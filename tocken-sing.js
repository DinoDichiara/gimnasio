const jwt = require('jsonwebtoken')

const secret = 'FuturoR6'
const playload = { 
    sub: 1,
    role: 'cliente'
}

function signToken(playload, secret) {
    return jwt.sign(playload, secret)
}

const token = signToken(playload, secret)
console.log(token);