// eslint-disable-next-line react/prop-types
const FormError = ({error}) => { 

    return(
        <>
            {
                // eslint-disable-next-line react/prop-types
                error && <p>{error.message}</p>
            }
        </>
    )
}


export default FormError