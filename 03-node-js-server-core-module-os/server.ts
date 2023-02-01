import http, { IncomingMessage, ServerResponse, Server } from 'http'
import os from 'os'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	async (request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')
		//os module
		let osData = {
			totalMemory: os.totalmem(),
			freeMemory: os.freemem(),
			homedir: os.homedir(),
			computerName: os.hostname(),
		}
		response.end(`${JSON.stringify(osData)}`)
		// response.end(`<h3>hello</h3>`)
	}
)

server.listen(port, hostname, () => {
	console.log(`Server started at http://${hostname}:${port}`)
})
