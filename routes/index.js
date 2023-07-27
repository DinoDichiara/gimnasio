const express = require('express');

const userRouter = require('./user.routes') 
const exercisesRouter = require('./exercise.routes') 
const rutinesRouter = require('./rutine.routes') 
const membershipRouter = require('./membership.routes') 
const categoryRouter = require('./category.routes') 




function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/user', userRouter )
    router.use('/exercises', exercisesRouter )
    router.use('/rutines', rutinesRouter )
    router.use('/membership', membershipRouter )
    router.use('/category', categoryRouter )
}

module.exports = routerApi