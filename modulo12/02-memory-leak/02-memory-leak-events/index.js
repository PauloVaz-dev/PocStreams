import { createServer } from 'http'

createServer((request, response) => {
    response.end()
}).listen(3000, () => console.log('running at 3000'))