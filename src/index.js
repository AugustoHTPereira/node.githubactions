var express = require("express");

var app = express();

app.get("/", (request, response) => {
    response.send({
        message: "Hello world!",
        sample: "GitHubActions"
    });
})

app.listen(3333, () => {
    console.log("Application start!");
})