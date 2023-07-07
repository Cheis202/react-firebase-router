import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </UserProvider>
)
