import { createServer } from 'node:http'

const server = createServer((request, res) => {
    let rawData = 0
    // /** @type {Uint8Array} chunk */
    const contentLength = request.headers['content-length']

    /** @param {Uint8Array} chunk - Somebody's name.*/        
    function onData (chunk) {
        //console.log( Object.getPrototypeOf(chunk))
        rawData += chunk.byteLength
        const pWritten = ((rawData / contentLength) * 100).toFixed(2);
        console.log(`Processing  ...  ${pWritten}% done ${rawData} ${contentLength}`);
    }

    if (request.url.includes('upload')) {
        request.on('data', onData)
        request.on('end', () => {
            res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
            res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.setHeader('Access-Control-Allow-Headers', 'content-type');
            res.end()
        })       
    }
    
})
server.listen(3000, () => console.log('Runing port 3000'))

