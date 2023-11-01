const buffer = Buffer.alloc(5)
buffer.fill('hi', 0, 2)
buffer.fill('aaa', 2, 5) // hexadecimal char code for : 
//buffer.fill('a', 5, 6) // hexadecimal char code for : 
console.log({ buffer})
console.log( buffer.toString() )

const anotherBuffer = Buffer.alloc(6)
anotherBuffer.set(buffer, buffer.byteOffSet)
anotherBuffer.fill('for', 5, 6)
console.log(anotherBuffer.toString(), anotherBuffer, anotherBuffer.byteLength)

const msg = 'hey there'
// same thing of buffer.from
const preLocated = Buffer.alloc(msg.length, msg)
console.log(preLocated.toString(), preLocated, preLocated.byteLength)

/** @variable { } */
const withBufferFrom = Buffer.from(msg)
console.log(withBufferFrom.toString(), withBufferFrom, withBufferFrom.byteLength)

//Print decimal  h = 104 in decimal and 68 in hex
https://pt.m.wikipedia.org/wiki/Ficheiro:ASCII-Table-wide.svg
//Print decimal, hex, char
for(const index in msg){
    const decimal = msg.charCodeAt(index)
    const hexValue = decimal.toString(16)
    console.log(decimal, hexValue, msg[index])
}