const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello world from this server");
});

server.listen(3000, () => {
    console.log("im listening000");
})