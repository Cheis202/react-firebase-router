export const erroresFirebase = (code)=>{
    switch(code){
        case "auth/email-already-in-use":
            return "Usuario ya registrado"
        case "auth/invalid-email":
            return "Email invalido"
        case "auth/user-not-found":
            return "Usuario no registrado"
        case "auth/wrong-password":
            return "Contraseña incorrecta"
        default:
            "ocurrio un error en el servidor "
    }
}