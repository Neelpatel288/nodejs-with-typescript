import { userRouter } from './router/userRouter'
import { apiRouter } from './router/apiRouter'
import express from 'express'

const app: express.Application = express()

const hostname: string = '127.0.0.1'
const port: number = 5000

app.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to express js')
})

//Router config.

app.use('/api', apiRouter)
app.use('/users', userRouter)

app.listen(port, hostname, () => {
	console.log('Express Server is started')
})
