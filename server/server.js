require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require("path");
const routerApp = require('./router/app/router-app.js');

class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.SRV_PORT || 8000;
    
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(express.static(path.resolve(__dirname, "/store-sevilla/client/dist")))
    }

    routes(){
        this.app.use('/', routerApp);
        this.app.use('/api', require('./router/api'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server Running on PORT ${this.port}`);
        })
    }
}

module.exports = Server;