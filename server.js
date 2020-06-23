const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/api/hello", (req, res) => {
    res.send({message: "Hello Express!"})
})

app.get("/api/customers", (req, res) => {
    res.send([
        {
            id : 1
          , name : `Han Tae-il`
          , image : `https://placeimg.com/64/64/1`
          , gender : `male`
          , bday : `910222`
          , job : `freelancer web developer`
        }
      , {
            id : 2
          , name : `Seon Min-jung`
          , image : `https://placeimg.com/64/64/2`
          , gender : `female`
          , bday : `900524`
          , job : `Exhibition planner`
        }
    ])
})

app.listen(port, () => {console.log(`Listening on port ${port}`)})