import http, { IncomingMessage, ServerResponse, Server } from 'http'
import fs from 'fs'
import path from 'path'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	async (request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')

		// fs module
		fs.readFile(
			path.join(__dirname, 'data', 'notes.txt'),
			'utf-8',
			(error, result) => {
				if (error) {
					console.log(error)
				}
				fs.writeFile(
					path.join(__dirname, 'data', 'data.txt'),
					result,
					'utf-8',
					(error) => {
						console.log(error)
					}
				)
				response.end('Data is return to a file..')
			}
		)
	}
)

server.listen(port, hostname, () => {
	console.log(`Server started at http://${hostname}:${port}`)
})
