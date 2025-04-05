const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({origin: "*"}))

const port = 8000

app.get("/", (req, res) => {
    res.send("Cloudweave API works!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})