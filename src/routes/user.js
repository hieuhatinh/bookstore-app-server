import express from 'express'

import { userController } from '../controllers/index.js'
import { checkToken } from '../authentication/auth.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'user' })
})

/* 
  /user/login 
*/
router.post('/login', userController.login)

// /user/register
router.post('/register', userController.register)

// Update profile user
router.post('/update', checkToken, userController.update)

export default router
