const http = require("http");
//server is an object that represents the server that you are creating
const server = http.createServer((req, res) => {
    console.log("We have your request");
    console.log(req.url, req.method, req.headers);
    // send a response back
    res.statusCode = 200;
    //set header
    res.setHeader("Content-Type", "text/html");
    //conditionals of how to handle the request based on the url
});

server.listen(3000, "This is a port ");

/* Handling errors is important, provide users with clear and useful info 
about what is wrong */

//Exercise 1
