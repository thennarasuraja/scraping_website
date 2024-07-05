import mysql from 'mysql2'

const databaseConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Priya@321',
    database:'web-scrapping'

})

databaseConnection.connect()

export default databaseConnection;