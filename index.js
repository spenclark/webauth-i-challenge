const server = require('./api/server.js')

const port = 0012

server.listen(port, () => {
    console.log(`server is running on ${port}`)
})