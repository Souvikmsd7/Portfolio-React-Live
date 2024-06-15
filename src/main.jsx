import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Example from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div>
    <App />
    {/* <div className='flex gap-4'>
    <Example 
      name = "abc"
    />
    <Example 
      name = "xyz"
    />
    </div> */}
    </div>
  </React.StrictMode>,
)
