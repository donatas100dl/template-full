import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import PublishBook from './pages/PublishBook';
import Auth from './pages/Auth';
import ViewAllBooks from './pages/ViewAllBooks';
import BookPage from './pages/BookPage';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogin = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<ViewAllBooks />} />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />} />
            <Route path="/favorites" element={isAuthenticated ? <Favorites /> : <Navigate to="/auth" />} />
            <Route path="/publish" element={isAuthenticated ? <PublishBook /> : <Navigate to="/auth" />} />
            <Route path="/auth" element={isAuthenticated ? <Navigate to="/" /> : <Auth onLogin={handleLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}