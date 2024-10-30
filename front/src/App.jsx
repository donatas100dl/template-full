import { useEffect, useState } from 'react'
import './App.css'
import { useAuth } from './utils/context/authContext'
import LoginPage from "./componnents/LoginPage"
import { useNavigate } from 'react-router-dom'
import { useBook } from './utils/context/bookContext'


function App() {
  const { user, loading, handleLogout } = useAuth()
  const { CreateBook, UpdateBook, DeleteBook, GetBooks, bookLoading, books } = useBook()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      GetBooks()
    }
  }, [user]);

  const [book, setBook] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value, // Dynamically update the state based on input name
    }));
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await UpdateBook(currentBookId, book);
      GetBooks()
    } else {
      await CreateBook(book);
      GetBooks()
    }
    setBook({ name: '', price: '', quantity: '', description: '' });
    setIsEditing(false);
    setCurrentBookId(null);
  };

  const handleEdit = (bookToEdit) => {
    setBook({
      name: bookToEdit.name,
      price: bookToEdit.price,
      quantity: bookToEdit.quantity,
      description: bookToEdit.description,
    });
    setIsEditing(true);
    setCurrentBookId(bookToEdit._id); // Set the ID of the book being edited
  };

  const handleDelete = async (bookTodelete) => {
    await DeleteBook(bookTodelete)
    GetBooks()
  }
  return (
    <>
      {user ? (
        <div>
          Welcome {user.name}
          <button onClick={handleLogout}>Logout</button>
          <br />
          <br />
          <br />

          <h1>Your books</h1>
          {bookLoading ? (
            <p>Loading books...</p>
          ) : (
            <ul>
              {books && books.length > 0 ? books.map((bookItem) => (
                <li key={bookItem._id}>
                  <h3>{bookItem.name}</h3>
                  <p>Price: ${bookItem.price}</p>
                  <p>Quantity: {bookItem.quantity}</p>
                  <p>Description: {bookItem.description}</p>
                  <p>Author: {bookItem.author}</p>
                  <button onClick={() => handleEdit(bookItem)}>Edit</button>
                  <button onClick={() => { handleDelete(bookItem._id) }}>Delete</button>
                </li>
              )) : <div>No books found</div>}
            </ul>
          )}



          <br />
          <br />
          <br />
          <h1>{isEditing ? 'Edit Book' : 'Create Book'}</h1>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name" // Set name attribute for identifying the input
                placeholder="Book Name"
                value={book.name}
                onChange={handleChange} // Use the generic change handler
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={book.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={book.quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="description"
                placeholder="Description"
                value={book.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit">{isEditing ? 'Update Book' : 'Add Book'}</button>
          </form>


        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default App
