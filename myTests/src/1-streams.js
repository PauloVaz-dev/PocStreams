process.stdin.pipe(process.stdout)

.on('data', msg => console.log(msg))
.on('data', msg => console.log(msg.toString()))

.on('error', msg => console.log(msg.toString()))
.on('end', msg => console.log(msg.toString()))
.on('close', msg => console.log(msg.toString()))
