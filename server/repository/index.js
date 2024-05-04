const mysql = require('mysql2/promise');

class Repository {

    constructor(){
        this.host     = process.env.MODE === 'development' ? process.env.DEV_DB_HOST     : process.env.PROD_DB_HOST;
        this.port     = process.env.MODE === 'development' ? process.env.DEV_DB_PORT     : process.env.PROD_DB_PORT;
        this.user     = process.env.MODE === 'development' ? process.env.DEV_DB_USERNAME : process.env.PROD_DB_USERNAME;
        this.password = process.env.MODE === 'development' ? process.env.DEV_DB_PASSWORD : process.env.PROD_DB_PASSWORD;
        this.database = process.env.MODE === 'development' ? process.env.DEV_DB_NAME     : process.env.PROD_DB_NAME;   
    }

    getConnection(){
        return mysql.createConnection({
            host     : `${this.host}`,  
            user     : this.user,
            password : this.password,
            database : this.database
        });
    }
}

module.exports = Repository;
 