import { MathUtil } from './util/mathutil'
import http, { IncomingMessage, ServerResponse, Server } from 'http'
import { StringUtil } from './util/stringUtil'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200
		response.setHeader('content-Type', 'text/html')

		let customerName: string = 'uiBrains'
		let length = StringUtil.printLength(customerName)
		console.log('🚀 ~ file: server.ts:14 ~ length', length)

		let channelName: string = 'uiBrains Technologies'
		let result: string = StringUtil.printTriangle(channelName)

		//Math Util
		let theNumber: number = 5
		result = MathUtil.printMathTable(theNumber)

		response.end(`<pre>${result}</pre>`)
	}
)

server.listen(port, hostname, () => {
	console.log(`Server started at http://${hostname}:${port}`)
})
