import http, { IncomingMessage, ServerResponse, Server } from 'http'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')

		if (request.url === '/user' && request.method === 'POST') {
			try {
				let body: any = ''
				request
					.on('data', (chunk) => {
						body += chunk
					})
					.on('end', () => {
						let formData = JSON.parse(body)
						response.end(`<pre>${JSON.stringify(formData)}</pre>`)
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
