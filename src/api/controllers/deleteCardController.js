module.exports = async function getCardController(req, res) {
    // res.status(200).json({response: "delete /api/card/:id || id="+req.params.id})
    const sql = require('../../db/dbConnection')

    const id = req.params.id
    console.log("deleting id: "+id)
    const result = await sql`DELETE FROM test WHERE id = ${id} RETURNING *;`
    console.log(result[0] ? 'deleted' : 'nothing to delete')
    res.json({result: 'ok'})
}