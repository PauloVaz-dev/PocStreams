import { Duplex} from 'node:stream'

const server = new Duplex.from({
    objectMode: true,
    write(chunk, enc, callback){
        console.log(`[writable] salving`, chunk)
        callback()
    },
    read(){}
})

server.write('oi')