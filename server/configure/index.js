import mysql from 'mysql2'

const databaseConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'web_scrap'

})

databaseConnection.connect()

export default databaseConnection;