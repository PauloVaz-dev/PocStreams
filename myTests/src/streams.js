import assert from 'node:assert';
import * as fs from 'node:fs'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

//https://nodesource.com/blog/understanding-streams-in-nodejs/
//https://2ality.com/2019/11/nodejs-streams-async-iteration.html
//Testes com uso do node >= 16

{
	// const readableStream = fs.createReadStream('file.csv', { encoding: 'utf-8'})
	// async function logChunks(readable) {
	// 	let result = ''
	// 	for await (const chunk of readable) {
	// 		result += chunk
	// 	}
	// 	return result;
	// }

	// assert.equal(await logChunks(readableStream), 'name:age\nPAULO:45');
}

{
	//Exemplo com promise
	/**
 * Reads all the text in a readable stream and returns it as a string,
 * via a Promise.
 * @param {Readable} readable
 */
	function readableToString(readable) {
		return new Promise((resolve, reject) => {
			let data = '';
			readable.on('data', function (chunk) {
				data += chunk;
			});
			readable.on('end', function () {
				resolve(data);
			});
			readable.on('error', function (err) {
				reject(err);
			});
		});
	}
	const readableStream = fs.createReadStream(
		'./file.csv', { encoding: 'utf8' });

	assert.equal(
		await readableToString(readableStream),
		'name:age\nPAULO:45');
}

{
	//Creating readable streams from iterables
	function* generator() {
		yield 'oi'
		yield 'fim'
	}

	const readable = Readable.from(generator())
	readable.on('data', chunk => {
		//console.log(chunk)
	})
}

{
	//Creating readable streams from iterables
	function* generator() {
		yield 'oi'
		yield 'fim'
	}
	let data = ''
	const readableStreams = Readable.from(generator())
	readableStreams.on('readable', chunk => {
		while ((chunk = readableStreams.read()) != null) {
			data += chunk;
		}
	})
	readableStreams.on('end', () => {
		//console.log(data)
	})
}

{
	//How to create a writable stream
	const file = fs.createWriteStream('./fileCreated.csv')
	function* generator() {
		yield 'oi'
		yield 'fim'
	}

	const readable = Readable.from(generator())
	readable.on('data', chunk => {
		//console.log(chunk)
		//file.write(chunk)
	})
}

{
	// How to create a writable stream
	//Convertir um async generator em uma Readable
	//Com uso do pipeline leio o Readable e escrevo o terminal que é uma Writable
	function* generator() {
		yield 'oi'
		yield 'fim'
	}

	const readable = Readable.from(generator())
	pipeline(readable, process.stdout)
}

{
	async function writeIterableToFile(iterable, filePath) {
		const readable = Readable.from(
			iterable, { encoding: 'utf8' });
		const writable = fs.createWriteStream(filePath);
		await pipeline(readable, writable); // (A)
	}
	await writeIterableToFile(
		['One', ' line of text.\n'], './log.txt');
}