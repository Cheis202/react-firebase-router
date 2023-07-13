export const formValidate = () => { 

    return{
        required:{
            value:true,
            message:"Campo obligatorio"
        },
        patternEmail:{
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email invalido"
        },
        patternURL:{
            // eslint-disable-next-line no-useless-escape
            value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            message: "Formato de url invalido"
        },
        minLength:{
            value:6,
            message: "Minimo 6 caracteres"
        },
        validateTrim:{
            trim: (v) => {
                if(!v.trim()){
                    return "Sin espacios en blanco"
                }
                return true
            }
        },
        validateEquals(value){
            return{
                equals: v => 
                    v=== value ||
                    "No coinciden las contraseñas ",
            }
        },


    }
}
