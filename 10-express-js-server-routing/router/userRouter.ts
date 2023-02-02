import express from 'express'

export const userRouter: express.Router = express.Router()

userRouter.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to User router')
})

userRouter.get('/test', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to User router TEST PATh')
})
