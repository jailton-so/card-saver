module.exports = async function getCardController(req, res) {
    // res.status(200).json({response: "get /api/card/:id || id="+req.params.id})
    const sql = require('../../db/dbConnection')

    const id = req.params.id
    console.log("getting id: "+id)
    const result = await sql`SELECT * FROM test WHERE id = ${id};`
    console.log(result[0])
    res.json(JSON.stringify(result[0]))
}