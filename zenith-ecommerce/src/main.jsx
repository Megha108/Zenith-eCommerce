import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx'
import { BrowserRouter } from "react-router-dom";
import AllPages from "./pages/allpages.jsx"; // ✅ import the router
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Header />
  <Navbar/>
  <main>
  
    <AllPages />
  
  </main>
  
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
