const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res) => {
   const log    = '${Date.now()}:New Req Received\n';
   fs.appendFile("log.txt", log,(err, data) => {

    switch(req.url){
        case "/":
            res.write("Hello From Server");
            break;
        case "/about":
            res.write("This is about page");
            break;
        default:
            res.write(" 404 Page Not Found");
    }
   });
    res.end("Hello From Server Again")
});

myServer.listen(8000, () => console.log("Server Started!"));
