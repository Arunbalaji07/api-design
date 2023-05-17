const http = require('http')

const server = http.createServer(async (req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        console.log("hello world");
        res.end()
    }
})

server.listen(4444, () => {
    console.log("Server on http://localhost:4444")
})