var express = require("express");

var app = express();

app.get("/", (request, response) => {
    response.send("Hello world!");
})

app.listen(3333, () => {
    console.log("Application start!");
})