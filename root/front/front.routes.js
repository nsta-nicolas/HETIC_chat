const express = require('express')
const router = express.Router()

class FrontRouterClass{
    routes(){

   
    router.get('/', (req, res) => {
        res.render('index');
    
    })
    router.get('/chat', (req, res) => {
        res.render('chat');
    
    })
    router.get('/register', (req, res) => {
        res.render('register');
    
    })
    router.get('/login', (req, res) => {
        res.render('login');
    
    })
    }
    init(){
        this.routes();
        return router
    }
}
module.exports = FrontRouterClass;