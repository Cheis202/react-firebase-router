export const erroresFirebase = (code)=>{
    switch(code){
        case "auth/email-already-in-use":
            return {
                code: "email",
                message: "Usuario ya registrado"
            }
        case "auth/invalid-email":
            return {
                code: "email",
                message: "Formato de email invalido"
            }
        case "auth/user-not-found":
            return {
                code:"email",
                message:"Usuario no registrado"
            }
        case "auth/wrong-password":
            return {
                code: "password",
                message: "Contraseña incorrecta"
            }
        case "auth/too-many-requests":
            return {
                code: "password",
                message: "El acceso a la cuenta a sido bloqueado, intentalo de nuevo mas tarde"
            }
        default:
            return{
                code:"email",
                message:"ocurrio un error en el servidor "
            }
            
    }
}