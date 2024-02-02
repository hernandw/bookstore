const { Pool } = require('pg')
require('dotenv').config()


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    AllowExitOnIdle: true
})
/* 
const getDate = async()=>{
    const res = await pool.query('SELECT NOW()')

    console.log(res.rows)
    return res.rows
}

getDate() */


module.exports = pool