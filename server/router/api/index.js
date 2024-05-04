const express = require('express');
const router = express.Router();

const Repository = require('../../repository');
const dbMysql = new Repository();

router.get('/orderstatus', async (req, res) => {

    try{

        const db = await dbMysql.getConnection();
        const [results, fields] = await db.execute('select * from orderStatus where 1', []);

        return res.status(200).json(results);
    }catch(error){
        return res.status(500).json(error);
    }
});

module.exports = router; 