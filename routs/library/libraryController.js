const { response } = require('express')
const mongoose = require('mongoose')
const Library = require('../../models/libraryModel.js')
const Users = require('../../models/userModel.js')


// 4 thing create, get, update, delete

// 1 create 

exports.createBook = async function (req, res) {
  try {

  //getting body 
  const body = req.body
  if (!body)
    return res.status(400).json({ message: 'Content cannot be empty!' });

  // cheking user
  if (!req.user)
    return res.status(401).json({ message: 'Unauthorized!' });

  //chesck if book already exists
  const bookExists = await Library.findOne({ name: body.name });
  if (bookExists) 
    return res.status(400).json({ message: 'Book already exists!' });

  // creating new book
  const newBook = new Library({
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    description: body.description,
    author: req.user.name,
    user_id: req.user._id,
    date: new Date(),
  })

  // saving book to DB
  const createdItem = await newBook.save()
  if (createdItem)
    return res.status(200).json(createdItem)


  } catch (error){
    res.status(400).json({ message: error.message })
  }
}

// 2 getting by user

exports.getBooks = async function (req, res) {
  try {

    // cheking user
    if (!req.user)
      return res.status(401).json({ message: 'Unauthorized!' });

    //getting books made by user
    const books = await Library.find({user_id: req.user._id.toString()})
    if (!books)
      return res.status(404).json({ message: 'No books found!' });

    //return books
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// 3 updating book

exports.updateBook = async function (req, res) {
  try{
    // getting body
    const body = req.body
    if (!body)
      return res.status(400).json({ message: 'Content cannot be empty!' });
    
    // cheking user
    if (!req.user)
      return res.status(401).json({ message: 'Unauthorized!' });
    
    // getting book by id
    console.log(req.params.id.toString())
    const book = await Library.findById(req.params.id);
    console.log(book)
    if (!book || book.length === 0)
      return res.status(404).json({ message: 'No book found with that id!' });
    
    // checking if user is the owner of the book
    if (book.user_id.toString()!== req.user._id.toString())
      return res.status(401).json({ message: 'Unauthorized!' });
    
    // updating book
    book.name = body.name;
    book.price = body.price;
    book.quantity = body.quantity;
    book.description = body.description;
    
    // saving updated book
    const updatedBook = await book.save();
    if (updatedBook)
      return res.status(200).json({book: updatedBook});
  }
  catch(error){
    res.status(400).json({ message: error.message })
  }
}

// 4 deleting book
exports.deleteBook = async function(req, res) {
  try{

    // cheking user
    if (!req.user)
      return res.status(401).json({ message: 'Unauthorized!' });
    
    // getting book by id
    const book = await Library.findById(req.params.id);
    if (!book)
      return res.status(404).json({ message: 'No book found with that id!' });
    
    // checking if user is the owner of the book
    if (book.user_id.toString()!== req.user._id.toString())
      return res.status(401).json({ message: 'Unauthorized!' });
    
    // deleting book
    const response = await Library.deleteOne({_id: req.params.id});
    if (response)
      return res.status(200).json({ message: 'Book deleted!' });


  } catch(error){
    res.status(400).json({ message: error.message})
  }
}

