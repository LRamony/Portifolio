const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');

class App{
    
    constructor(){
        this.serves = express();

        mongoose.connect('apiDataBase',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });

        this.middlewares();
        this.routes();       
    }

    middlewares(){
        this.serves.use(
            '/files',
            express.static(path.resolve(__dirname,'..','uploads'))
        );

        this.serves.use(express.json());

    }

    routes(){
        this.serves.use(routes);
    }

}module.exports = new App().serves;
