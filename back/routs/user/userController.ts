import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Request, Response, NextFunction } from 'express'
import { PrismaClient, users } from '@prisma/client'

const prisma = new PrismaClient()

interface CustomRequest extends Request {
  user?: users
}

const registerUser = async (req: Request, res: Response, next?: NextFunction) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.status(400).json({ error: 'please fill all the fields' })
      return
    }
    const userExists = await prisma.users.findUnique({
      where: { email: email },
    })

    if (userExists) {
      res.status(401).json({ error: 'User already exists' })
      return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData: Omit<users, "id"> = {
      username: name,
      email,
      password: hashedPassword,
    }
    console.log(userData)
    const user = await prisma.users.create({ data: userData })

    if (!user) {
      res.status(400).json({message: "Wrong User Data"})
      return
    }
    res.status(201).json({
      message: 'new user created',
      id: user.id,
      username: user.username,
      email: user.email,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await prisma.users.findUnique({ where: { email: email } })
    if (!user) {
      res.status(404).json({
        message: 'user not found',
      })
    }

    if (user && user.email === email) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        res.status(400).json({ message: 'invalid password' })
        return
      }
      res.status(200).json({
        message: 'login successfully',
        name: user.username,
        id: user.id,
        email: user.email,
        token: generateToken(user.id),
        //   avatarUrl: user.avatarUrl,
      })
    }
  } catch (error: any) {
    res.status(400).json({ message: error })
  }
}

const getCurrentUser = async (req: CustomRequest, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      res.status(404).json({ message: 'failed to find user' })
      return
    }

    res.status(200).json({
      message: 'login successfully',
      id: user.id,
      name: user?.username,
      email: user.email,
      password: user.password,
    })
  } catch (error) {
    res.status(500).json({ messsage: error })
  }
}
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany()
    res.status(200).json({
      users: users.map((user) => {
        return {
          name: user.username,
          _id: user.id,
        }
      }),
    })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
}

const checkEmailTaken = async (req: Request, res: Response) => {
  const given_email = req.body.email
  const user = await prisma.users.findUnique({ where: { email: given_email } })
  if (user) {
    res.status(200).json({ isTaken: true })
  } else {
    res.status(200).json({ isTaken: false })
  }
}

const checkUsernameTaken = async (req: Request, res: Response) => {
  const given_name = req.body.name
  const user = await prisma.users.findUnique({
    where: { username: given_name },
  })
  if (user) {
    res.status(200).json({ isTaken: true })
  } else {
    res.status(200).json({ isTaken: false })
  }
}

const generateToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'defoult', {
    expiresIn: '30d',
  })
}

export {
  registerUser,
  login,
  getCurrentUser,
  getAllUsers,
  checkEmailTaken,
  checkUsernameTaken,
}
