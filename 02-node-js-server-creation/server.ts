import http, { IncomingMessage, ServerResponse, Server } from 'http'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')
		response.end(`<h3>hello</h3>`)
	}
)

server.listen(port, hostname, () => {
	console.log(`Server started at http://${hostname}:${port}`)
})
