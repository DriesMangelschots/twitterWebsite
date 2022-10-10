import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Routing from './components/Routing';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routing />

  </BrowserRouter>
  </React.StrictMode>
)
