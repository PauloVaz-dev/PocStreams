// Neste exemplo use curl localhost:4000 -o out.txt

import  { Transform, Writable, Readable } from 'stream';

// Fonte de dados
const readable = new Readable({
  read() {
    this.push('teste 1')
    this.push('teste 2')
    this.push('teste 3')
    this.push(null)
  },
})

//Saida de dados, gravar , escrever no terminal
const writable = Writable({
  write(chunk, encoding, cb) {
    console.log('fim', chunk.toString())
    cb()
  }
})

readable
.pipe(writable) //Reddirecionar para um writabe
//.pipe(process.stdout) //Redirecionar para um stdout

//Escutar os eventos
readable.on('data', (data) => {
  console.log('>>', data)
})

readable.on('end', () => {
  console.log('>> Fim')
})
