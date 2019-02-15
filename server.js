require('dotenv').config();

const express = require('express');
const server = express();
const port = process.env.PORT;

const ejs = require('ejs');
const path = require('path');

// route 
// const frontRouter = require('./root/front/front.routes');
const mainRouter = require('./root/main.router');
server.use('/', mainRouter);

class Serverinit {
    init() {
        //
        // server.engine('html', ejs.renderFile)
        server.set('views' ,__dirname + "/www" );
        server.use(express.static(path.join(__dirname + "/www")));
        
        server.set("view engine","ejs")  
        
        //configurer les routes

        this.launch()
    }  

    //lancer le server
   launch(){
    server.listen(port, ()=>{
        console.log(` Le serveur est lancer sur le port ${port}`);
    });
   }
}

new Serverinit().init();


