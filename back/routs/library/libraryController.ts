import express, { Request, Response } from 'express';
import { PrismaClient, users, books, user_favorites }  from '@prisma/client'

const prisma = new PrismaClient();
const app = express();

export interface CustomRequest extends Request {
  user?: users;
}

//todo 5 things create, getAll, get,  update, delete
//? 1 create 

export const createBook = async function (req: CustomRequest, res: Response) {
  try {

  //getting body 
  const body = req.body
  if (!body){
    res.status(400).json({ message: 'Content cannot be empty!' });
    return
  }

  // cheking user
  if (!req.user) {
    res.status(401).json({ message: 'Unauthorized!' });
    return
  }
   
  //chesck if book already exists
  const bookExists = await prisma.books.findFirst({where: {title: body.title}});
  if (bookExists) {
    res.status(400).json({ message: 'Book already exists!' });
    return
  }

  // creating new book
  const year = new Date().getFullYear()

  const newBook: Omit <books, "id"> = {
    title: body.title,
    description: body.description,
    genre: body.genre,
    author_id: req.user.id,
    publication_year: year
  }

  if (!newBook) {
    res.status(400).json({ message: 'Invalid book data!' });
    return
  }

  // saving book to DB
  const createdItem = await prisma.books.create({data:newBook})
  if (createdItem) {
    res.status(200).json(createdItem)
    return
  }


  } catch (error:any){
    res.status(400).json({ message: error.message })
  }
}

// 2 get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    //getting all books
    const books = await prisma.books.findMany()
    if (!books) {
      res.status(404).json({ message: 'No books found!' });
      return
    }

    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

//? 3 getting by user

export const getBooks = async function (req: CustomRequest, res: Response) {
  try {

    // cheking user
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized!' });
      return
    }
      

    //getting books made by user
    const books: Array<books> | null = await prisma.books.findMany({where: {
      author_id: req.user.id
    }})
    if (!books) {
       res.status(404).json({ message: 'No books found!' });
       return
    }
    //return books
    res.status(200).json(books);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
}

//? 4 updating book

export const updateBook = async function (req: CustomRequest, res: Response) {
  try{
    // getting body
    const body = req.body
    if (!body) {
      res.status(400).json({ message: 'Content cannot be empty!' });
      return
    }
     
    
    // cheking user
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized!' });
      return
    }

    
    // getting book by id
    console.log(req.params.id.toString())
    const book:books | null = await prisma.books.findFirst({where: {
      AND:{
        id: parseInt(req.params.id),
        author_id: req.user.id,
      }
    } }) 
    console.log(book)
    if (!book) {
      res.status(404).json({ message: 'No book found with that id!' });
      return
    }
    
    
    // updating book
    const newBook: any = {
      title: body.title ?? book.title,
      genre: body.genre ?? book.title,
      publication_year: body.year ?? book.publication_year,
      description: body.description ?? book.description,
    }
    
    const updatedBook: books | null = await prisma.books.update({
      where: { id: book.id },
      data: newBook
    })
    // saving updated book
    if (updatedBook) {
      res.status(200).json({book: updatedBook});
      return
    }
      
  }
  catch(error:any){
    res.status(400).json({ message: error.message })
  }
}

//? 5 deleting book
export const deleteBook = async function(req: CustomRequest, res: Response) {
  try{

    // cheking user
    if (!req.user){
      res.status(401).json({ message: 'Unauthorized!' });
      return
    }
    
    // getting book by id
    const book: books | null = await prisma.books.findFirst({where: {
      AND:{
        id: parseInt(req.params.id),
        author_id: req.user.id,
      }
    } })
    if (!book) {
      res.status(404).json({ message: 'No book found with that id!' });
      return
    }
    
    
    // deleting book
    const response = await prisma.books.delete({where: {id: book.id}})
    if (response) {
      res.status(200).json({ message: 'Book deleted!' });
    }


  } catch(error:any){
    res.status(400).json({ message: error.message})
  }
}

