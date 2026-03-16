import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Page from './Components/Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)