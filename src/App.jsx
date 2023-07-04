import {Routes,Route} from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import Navbar from "./components/NavBar"
import RequireAuth from "./components/RequireAuth"
const App = ( )=> {
  

  return (

    <> 
      <Navbar/>
      <Routes>
        
        <Route path="/" element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
