const express = require('express')
const router = express.Router()

class ApiRouterClass{
    routes(){

    router.post('/register', (req, res) => {
        res.render('register');
    
    })
    router.post('/login', (req, res) => {
        res.render('login');
    
    })
    }
    init(){
        this.routes();
        return router
    }
}
module.exports = ApiRouterClass;