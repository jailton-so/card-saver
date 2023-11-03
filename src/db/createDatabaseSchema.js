const sql = require('./dbConnection.js')

async function createDatabaseSchema (){
    try {
        await sql`CREATE TABLE test (
            id serial PRIMARY KEY,
            url VARCHAR(255) NOT NULL,
            host VARCHAR(255) NOT NULL,
            ogMetaTags JSONB,
            createdAt TIMESTAMP DEFAULT current_timestamp
            )`
        console.log('Database created')
    } catch (e){
        console.log(e)
    } finally {
        await sql.end()
    }
}
createDatabaseSchema()