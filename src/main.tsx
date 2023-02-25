import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import './input.css'
import App from './App'
// import {store}  from './store'
import "regenerator-runtime";


declare global {
  interface Window {
    cloudinary: any;
  }

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

  root.render(

      <Router>
      <App />
      </Router>

  )

