import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navegate = useNavigate()
    const {registerUser} = useContext(UserContext)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await registerUser(email,password)
            navegate("/")
        } catch (error) {
            console.log(error.code)
        }
    }
    return(
        
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Ingrese su email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Ingrese su contraseña" value={password} onChange={e => setPassword(e.target.value)}  />
                <button type="submit">Registerrr</button>

            </form>
        </>
    )
 }


export default Register