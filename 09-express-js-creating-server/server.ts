import express from 'express'
import { listenerCount } from 'process'

const app: express.Application = express()

const hostname: string = '127.0.0.1'
const port: number = 5000

app.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to express js')
})

app.listen(port, hostname, () => {
	console.log('Express Server is started')
})
