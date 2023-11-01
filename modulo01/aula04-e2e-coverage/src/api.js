const http = require('http')

const DEFAULT_USER = {
	name: 'vaz',
	password: '123'
}

const toLower = (text) => text.toLowerCase()

const { once } = require('events')
const routes = {
	'/contact:get': (request, response) => {
		response.write('contact us page')
		return response.end()
	},
	//curl -i -X POST --data '{"name": "vaz", "password": "123"}' localhost:3000/contact
	'/login:post': async (request, response) => {
		const data = await once(request, 'data')
		const user = JSON.parse(data.toString())
		if(toLower(user.name) !== DEFAULT_USER.name || user.password !== DEFAULT_USER.password){
			response.writeHead(401)
			return response.end('login failed')
		}
		return response.end()
	},
	default(request, response){
		response.writeHead(404)
		return response.end('route not inplemented')
	}
}
function handle(request, response){
	const { url, method } = request
	const routKey = `${url.toLowerCase()}:${method.toLowerCase()}`
	const chosen = routes[routKey]
	if(!chosen) return routes.default(request, response)
	return chosen(request, response)
}
const app = http.createServer(handle)
.listen(3000, ()=> console.log('running at 3000 '))

module.exports = app