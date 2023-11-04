module.exports = async function getCardsController(req, res) {
    // res.status(200).json({response: "get /api/cards"})
    const sql = require('../../db/dbConnection')

    const result = await sql`SELECT * FROM test;`
    console.log(result.length)
    res.json(JSON.stringify(result))
}