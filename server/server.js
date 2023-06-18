const express = require("express");
const path = require("path");
const server = express();
const port = 8000
server.use(express.static("clientside"));
console.log(__dirname)

server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../clientside/index.html"))
})


server.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
})

/*
    TO-DO:
    1. Kolla varför och hur express.static("path") funkar är rooten för hemsidan respot?
    2. Förstå varför path.resolve fixade forrbiden erroret (testa ta bort så får du se erroret)

*/