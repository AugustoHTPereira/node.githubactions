var express = require("express");

var app = express();

var path = require("path");

app.get("/", (req, res) => {
    response.send({
        message: "Hello world! Github Actions.",
        sample: "GitHubActions"
    });
})

app.listen(3333, () => {
    console.log("Application start!");
})