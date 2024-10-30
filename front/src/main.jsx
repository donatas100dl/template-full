import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { AuthProvider } from "./utils/context/authContext";
import { BookProvider } from "./utils/context/bookContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './componnents/LoginPage.jsx';
import RegisterPage from './componnents/RegisterPage.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookProvider>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BookProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
