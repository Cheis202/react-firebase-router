import { forwardRef } from "react"

// eslint-disable-next-line react/display-name, react/prop-types
const FormInput = forwardRef(({type,placeholder, onChange, onBlur, name, children},ref)=>{
    return(

        <>
            <input 
                type={type} 
                placeholder={placeholder} 
                ref={ref} 
                onChange={onChange} 
                onBlur={onBlur} 
                name={name}
            />
            {children}
        </>
    )
})

export default FormInput