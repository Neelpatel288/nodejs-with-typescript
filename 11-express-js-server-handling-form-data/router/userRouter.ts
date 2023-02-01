import express from 'express'

export const userRouter: express.Router = express.Router()

/*
    @usage : test URL
    @url: 127.0.0.1:5000/users
    @method: get
    @field: no-field
    @access: PUBLIC
*/

userRouter.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('welcome to User router')
})

/*
    @usage : to check form data is recived or not
    @url: 127.0.0.1:5000/users/login
    @method: post
    @field: name, password
    @access: PUBLIC
*/

userRouter.post('/login', (req: express.Request, res: express.Response) => {
	//config
	try {
		let formData = req.body
		res.status(200).json({
			msg: 'form data recived',
			formData: formData,
		})
	} catch (e) {
		console.log(e)
	}
})
