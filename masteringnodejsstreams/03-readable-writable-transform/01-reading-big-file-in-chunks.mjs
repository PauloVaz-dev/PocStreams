// for i in `seq 1 20`; do node -e "process.stdout.write('$i-hello world\n'.repeat(1e7))" >> big-file.txt; done
import { createReadStream, promises, } from 'node:fs'
const filename = './big-file.txt'

//Se o arquivo tiver mais que 2G o node vai reclamar
{
  try {
    const file = await promises.readFile(filename)
    console.log(file)
    console.log(file.byteLength / (1024 * 1024 * 1024))

  } catch (error) {
    console.log('error: max 2Gb reached...', error.message)
  }
}

{
  let chunkConsumed = 0
  const stream = createReadStream(filename)
  // stream.once('data', msg=>{
  //     console.log(msg.length)
  // })

  // stream.once('readable', _ => {
  //     console.log('read 14 chunk bytes', stream.read(14).toString())
  // })

  stream.on('readable', _ => {
    let chunk = 0
    while (null !== (chunk = stream.read(111540))) {
      console.log(chunk.length)
      chunkConsumed += chunk.length
    }
  })

  //stream.on('data', (chunk)=> {
  //    //console.log(msg.byteLength , msg.length)
  //    chunkConsumed += chunk.length
  //})

  
  stream.on('end', () => {
    console.log(`Read ${(chunkConsumed / (1024 * 1024 * 1024)).toFixed(2)}`)
  })
}


//Exemplo abaixo leio a chunk definindo o tamanho com read(14)
// 14 bytes é exatamente a string '1-hello world'
{
  let chunkConsumed = 0
  const stream = createReadStream(filename)

  stream.on('readable', _ => {
    let chunk = 0
    while (null !== (chunk = stream.read(14))) {
      console.log(chunk.toString())
      chunkConsumed += chunk.length
    }
  })

  stream.on('end', () => {
    console.log(`Read ${(chunkConsumed / (1024 * 1024 * 1024)).toFixed(2)}`)
  })
}
