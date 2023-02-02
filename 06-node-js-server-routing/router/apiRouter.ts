import http from 'http'

export class ApiRouter {
	public static mapRouter(
		request: http.IncomingMessage,
		response: http.ServerResponse
	) {
		let url: string | undefined = request.url
		let method: string | undefined = request.method
		let result: string = ''
		if (url === '/' && method === 'GET') {
			result = `<h3>Welcome to Page</h3>`
		} else if (url === '/about' && method === 'GET') {
			result = `<h3>About Page</h3>`
		} else if (url === '/services' && method === 'GET') {
			result = `<h3>Services Page</h3>`
		} else if (url === '/contact' && method === 'GET') {
			result = `<h3>Contact Page</h3>`
		} else {
			result = `<h3>Page not found</h3>`
		}

		response.end(`${result}`)
	}
}
