const mysql = require('mysql2');

 
db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Saxony1066',
      database: 'employee_db'
    },
    console.log(`connected to database`)
)
    

    module.exports= db