import express from 'express'

export const apiRouter: express.Router = express.Router()

apiRouter.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to api router')
})

apiRouter.get('/test', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to api router TEST PATh')
})
