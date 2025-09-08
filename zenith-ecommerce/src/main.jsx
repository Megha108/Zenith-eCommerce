import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx'
import Slider from './components/slider.jsx'
import SliderTextDescription from './components/SlidetextDescription.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />
  <Navbar/>
  <main>
  <Slider/>
  <SliderTextDescription/>
  
  </main>
    <App />
  </StrictMode>,
)
