const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log:", err);
        }

        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page");
                break;

            case "/about":
                const username = myUrl.query.username || "Guest";
                res.end(`Hello ${username}, I am Dhairya`);
                break;

            case "/contact":
                res.end("Contact Page");
                break;

            case "/search":
                const searchTerm = myUrl.query.search_query || "Nothing";
                res.end(`Here are your search results for:+ searchTerm`);
                break;

            default:
                res.end("404 Page Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));