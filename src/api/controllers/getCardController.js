module.exports = function getCardController(req, res) {
    res.status(200).json({response: "get /api/card/:id || id="+req.params.id})
}