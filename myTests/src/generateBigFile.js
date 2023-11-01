
import { createWriteStream } from 'node:fs'
import { Readable, Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'



function generate01() {
 	const file = createWriteStream('bigFile.csv')
 	const MAX_LENGHT = 10
 	file.write('cpf;telefone_cliente;detalhes' + '\n')
 	for (let i = 0; i < 2e6; i++) {
 		let data = String(i).padStart(MAX_LENGHT, 0)
 		file.write(`${data};000000000;Message` + '\n')
 	}
 }

 function generate02() {
	const MAX_LENGHT = 10
	const readable = Readable({
		read() {
			for (let index = 0; index < 2e6; index++) {
				const data = String(index).padStart(MAX_LENGHT, 0)
				// É necessário transformar em uma string, pois o Buffer suporta string 
				this.push(`${data};000000000;Message\n`)
			}
			this.push(null)
		}
	})

	const mapHeader = Transform({
		transform(chunk, encoding, cb) {
			this.counter = this.counter ?? 0    
			if(this.counter){
				return cb(null, chunk)
			}
			this.counter = 1
			cb(null, "cpf;telefone_cliente;detalhes\n".concat(chunk))  
		}
	})
	pipeline(readable,mapHeader, createWriteStream('bigFile.csv'))
}

function generate03() {
	const MAX_LENGHT = 10
	function* generator() {
		for (let index = 0; index < 2e6; index++) {
			const data = String(index).padStart(MAX_LENGHT, 0)
			// É necessário transformar em uma string, pois o Buffer suporta string 
			yield `${data};000000000;Message\n`
		}
	}

	const readable = Readable.from(generator())
	pipeline(readable, createWriteStream('bigFile.csv'))
}


//generate01()
//generate02()
generate03()

