module.exports = async function saveCardController(req, res){
    // res.status(201).json({response: 'post /api/cards'})
    const sql = require('../../db/dbConnection')

    const {url, host, ogMetaTags} = req.body
    await sql`INSERT INTO test (url, host, ogMetaTags)
    VALUES (
        ${url},
        ${host},
        ${ogMetaTags}
    );
    `
    console.log('saved into database')
    res.json({result: 'ok', params: req.body})
}