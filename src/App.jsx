import {Routes,Route} from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import Navbar from "./components/NavBar"
import RequireAuth from "./components/RequireAuth"
import Register from "./routes/Register"
import { useContext } from "react"
import { UserContext } from "./context/UserProvider"
const App = ( )=> {  
  const {user} = useContext(UserContext)

  if(user === false){
    return <p>Loading...</p>
  }

  return (

    <> 
      <Navbar/>
      <Routes>
        <Route 
          path="/" 
          element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
            }
        />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
