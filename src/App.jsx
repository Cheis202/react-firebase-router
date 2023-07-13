import {Routes,Route} from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./context/UserProvider"

import Login from "./routes/Login"
import Home from "./routes/Home"
import Perfil from "./routes/Perfil"
import Register from "./routes/Register"

import Navbar from "./components/NavBar"

import LayoutRequireAuth from "./components/Layouts/LayoutRequireAuth"
import LayoutContainerForm from "./components/Layouts/LayoutContainerForm"
import LayoutRedirect from "./components/Layouts/LayoutRedirect"
import NotFound from "./routes/NotFound"


const App = ()=> {  
  const {user} = useContext(UserContext)

  if(user === false){
    return <p>Loading...</p>
  }

  return (

    <> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<LayoutRequireAuth/>}>
          <Route index element={<Home/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Route>

        <Route path="/" element={<LayoutContainerForm/>}>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect/>}>

          <Route index path="*" element={<NotFound/>}/>

        </Route>

      </Routes>
    </>
    
  )
}

export default App
