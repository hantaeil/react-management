const fs = require("fs")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const data = fs.readFileSync("./database.json")
const conf = JSON.parse(data)
const mariadb = require("mariadb/callback")

const conn = mariadb.createConnection({
// const conn = mariadb.createPool({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

app.get("/api/hello", (req, res) => {
    res.send({message: "Hello Express!"})
})

app.get("/api/customers", (req, res) => {
    const query = `select * from customer`
    conn.query(query, (err, rows, fields) => {
        res.send(rows)
    })
    // conn.getConnection(err)
    // res.send({message: "Hello Express!"})
    // res.send({message: conn})
    // let conn, rows
    // try {
    // conn.connect()
        // conn.query("use management")
    // rows = conn.query(query, (err, rows, fields) => {
    //     res.send(rows)
    // })
    // } catch (error) {
    //     // throw err
    // } finally {
    //     console.log(conn)
    //     // if (conn) conn.end()
    // }
    // conn.query(`
    //     select *
    //       from customer
    // `, (err, rows, fileds) => {
    //     res.send(rows)
    // })
    // res.send([
    //     {
    //         id : 1
    //       , name : `Han Tae-il`
    //       , image : `https://placeimg.com/64/64/1`
    //       , gender : `male`
    //       , bday : `910222`
    //       , job : `freelancer web developer`
    //     }
    //   , {
    //         id : 2
    //       , name : `Seon Min-jung`
    //       , image : `https://placeimg.com/64/64/2`
    //       , gender : `female`
    //       , bday : `900524`
    //       , job : `Exhibition planner`
    //     }
    // ])
})

app.listen(port, () => {console.log(`Listening on port ${port}`)})