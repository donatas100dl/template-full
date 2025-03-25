import { Request, Response, NextFunction } from 'express';
import { PrismaClient, users } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export interface CustomRequest extends Request {
  user?: any;
  headers: {
    authorization?: string;
  }
}


const protect = async (req: CustomRequest, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
      res.status(401).json({ error: 'Not authorized, no token' });
      return
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'your-secret');
    if (!process.env.JWT_SECRET) {
      console.error('No JWT_SECRET environment variable found. Using the default');
    }
    //console.log(decoded);
    const user = await prisma.users.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        username: true,
        password: false
      }
    });

    if (!user) {
      res.status(401).json({ error: 'Not authorized, user not found' });
      return
    }

    req.user = user; // Attach the user to the request object
    next(); // Call the next middleware
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Not authorized, token failed' });
  }
}

export default protect