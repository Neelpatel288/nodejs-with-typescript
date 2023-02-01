import { userRouter } from './router/userRouter'
import express from 'express'

const app: express.Application = express()

const hostname: string = '127.0.0.1'
const port: number = 5000

//config to reciver form data
app.use(express.json())

app.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to express js')
})

//Router config
app.use('/users', userRouter)

app.listen(port, hostname, () => {
	console.log('Express Server is started')
})
