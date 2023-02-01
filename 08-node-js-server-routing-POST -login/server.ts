import http, { IncomingMessage, ServerResponse, Server } from 'http'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')

		if (request.url === '/login' && request.method === 'POST') {
			try {
				let body: any = ''
				request
					.on('data', (chunk) => {
						body += chunk
					})
					.on('end', () => {
						let formData = JSON.parse(body)
						if (
							formData.name === 'Rajan' &&
							formData.password === 'rajan@123'
						) {
							response.end(`<h3>Login is success</h3>`)
						} else {
							response.end(`<h3>Invalid</h3>`)
						}
					})
			} catch (e) {
				console.error(e)
			}
		}
	}
)

server.listen(port, hostname, () => {
	console.log(`Server started at http://${hostname}:${port}`)
})
