const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3001

app.use(cors())

app.get("/api/home", (request, response) => {
    response.json({Message: "YAAAA" ,people: ['Omar', 'Wael', 'sara']})
})

app.listen(PORT, ()=>{
    console.log("Server Conneected");
})