import express from 'express'

import { userController } from '../controllers/index.js'
import { checkToken } from '../authentication/auth.js'

const router = express.Router()

/* 
  /user/login 
*/
router.post('/login', userController.login)

// /user/register
router.post('/register', userController.register)

// Update profile user
router.put('/update', checkToken, userController.update)

export default router
