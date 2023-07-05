import { useContext} from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const Register = () => {

    
    const navegate = useNavigate()
    const {registerUser} = useContext(UserContext)

    
    const {
            register,
            handleSubmit,
            formState:{errors},
            getValues,
            setError,
        } = useForm()


    const onSubmit = async({email,password}) =>{
        try {
            await registerUser(email,password)
            console.log("Usuario creado")
            navegate("/")
        } catch (error) {
            switch(error.code){
                case "auth/email-already-in-use":
                    setError("email",{
                        message:"Usuario ya registrado"
                    })
                    break
                case "auth/invalid-email":
                    setError("email",{
                        message:"Email invalido"
                    })
                    break
                default:
                    console.log("ocurrio un error en el servidor ")
            }
        }
    } 

    return(
        
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder="Ingrese su email" 
                    {...register("email", {
                        required:{
                        value:true,
                        message:"Campo obligatorio"
                        },
                        pattern:{
                            value: /[a-z0-9]+(\.[_a-z0-o]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                            message: "Formato de email invalido"
                        }
                    })}
                        />
                {
                    errors.email && <p>{errors.email.message}</p>
                }
                <input 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    {...register("password", {
                        minLength:{
                        value:6,
                        message: "Minimo 6 caracteres"
                        },
                        validate:{
                           trim: (v)=>{
                                if(!v.trim()){
                                    return "Sin espacios en blanco"
                                }
                                return true
                           }
                        }
                        
                    })}
                    />
                {
                    errors.password && <p>{errors.password.message}</p>
                }
                <input 
                    type="password" 
                    placeholder="Ingrese nuevamente su contraseña" 
                    {...register("repassword",{
                        setValueAs: v => v.trim(),
                        validate:{
                            equals: v=> v=== getValues("password") || "No coinciden las contraseñas ",
                            
                        },
                        
                    })}
                />
                {
                    errors.repassword && <p>{errors.repassword.message}</p>
                }
                <button type="submit">Registerrr</button>

            </form>
        </>
    )
 }


export default Register