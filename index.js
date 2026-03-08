const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Hello World from Harness CI/CD")
})

server.listen(3000)