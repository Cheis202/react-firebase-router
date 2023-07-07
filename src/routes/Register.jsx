import { useContext} from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { erroresFirebase } from "../utils/erroresFirebase"
import FormError from "../components/FormError"
import { formValidate } from "../utils/formValidate"
import FormInput from "../components/FormInput"

const Register = () => {
    const navegate = useNavigate()
    const {registerUser} = useContext(UserContext)
    const {required,patternEmail, minLength,validateTrim,validateEquals} = formValidate()

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
            navegate("/")
        } catch (error) {
            setError("firebase",{
                message: erroresFirebase(error.code)
            })
        }
    } 

    return(
        
        <>
            <h1>Register</h1>
            <FormError error={errors.firebase}/>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                    type="email" 
                    placeholder="Ingrese su email" 
                    {...register("email", {
                        required,
                        pattern: patternEmail
                    })}
                >
                    <FormError error={errors.email}/>
                </FormInput>

                <FormInput
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    {...register("password", {
                        minLength,
                        validate:validateTrim,
                    })}
                >
                    <FormError error={errors.password}/>
                </FormInput>

                <FormInput
                    type="password" 
                    placeholder="Ingrese nuevamente su contraseña" 
                    {...register("repassword",{
                        validate:validateEquals(getValues) 
                    })}
                >
                    <FormError error={errors.repassword}/>
                </FormInput>

                <button type="submit">Registerrr</button>

            </form>
        </>
    )
 }


export default Register