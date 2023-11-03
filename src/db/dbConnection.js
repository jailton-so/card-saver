require('dotenv').config();
const postgres = require('postgres')
const connection = postgres(process.env.DB_URL, {ssl: 'require'})

module.exports = connection