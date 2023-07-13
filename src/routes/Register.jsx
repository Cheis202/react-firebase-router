import { useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { UserContext } from "../context/UserProvider"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"
import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import Title from "../components/Title"
import Button from "../components/Button"


const Register = () => {
    const navegate = useNavigate()
    const {registerUser} = useContext(UserContext)
    const {required,patternEmail, minLength,validateTrim,validateEquals} = formValidate()
    const [loading,setLoading] = useState(false)

    const {
            register,
            handleSubmit,
            formState:{errors},
            getValues,
            setError,
        } = useForm()


    const onSubmit = async({email,password}) =>{
        try {
            setLoading(true)
            await registerUser(email,password)
            navegate("/")
        } catch (error) {
            const {code,message} = erroresFirebase(error.code)
            setError(code,{ message })
        }finally{
            setLoading(false)
        }
    } 

    return(
        
        <>
            <Title text="Register"/>
            <FormError error={errors.firebase}/>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                    type="email" 
                    placeholder="Ingrese su email" 
                    {...register("email", {
                        required,
                        pattern: patternEmail
                    })}
                    label="Ingresa tu correo"
                    error={errors.email}
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
                    label="Ingresa tu contraseña"
                    error={errors.password}
                >
                    <FormError error={errors.password}/>
                </FormInput>

                <FormInput
                    type="password" 
                    placeholder="Ingrese nuevamente su contraseña" 
                    {...register("repassword",{
                        validate:validateEquals(getValues("password")) 
                    })}
                    label="Repite tu contraseña"
                    error={errors.repassword}
                >
                    <FormError error={errors.repassword}/>
                </FormInput>

                <Button type="submit" text="Register" loading={loading}/>

            </form>
        </>
    )
 }


export default Register