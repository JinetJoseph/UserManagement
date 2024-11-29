const express=require('express')
const {getUsers, login,adduser,UpdateUser,deleteUser}=require('../controllers/userController.js')
const userRouter=express.Router()
userRouter.post('/',adduser)
userRouter.get('/',getUsers)
//http:localhost:3000/users/login
userRouter.post('/login',login)
userRouter.patch('/:id',UpdateUser)
//delete
userRouter.patch('/:id',deleteUser)

module.exports=userRouter

