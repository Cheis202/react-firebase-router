import { useEffect, useState } from "react"
import Title from "../components/Title"
import { useFirestore } from "../components/hooks/useFirestore"
import Button from "../components/Button"
import { formValidate } from "../utils/formValidate"
import FormInput from "../components/FormInput"
import FormError from "../components/FormError"
import { useForm } from "react-hook-form"
import { erroresFirebase } from "../utils/erroresFirebase"



const Home =() =>{
    const [copy,setCopy] = useState({})

    const {data,error,loading,getData,addData,deleteData,updateData}= useFirestore()
    
    const {required,patternURL} = formValidate()

    const {
        register,
        handleSubmit,
        formState:{errors},
        setError,
        resetField,
        setValue
    } = useForm() 
    const [newOriginId,setnewOriginId] = useState()

    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    if(loading.getData) return <p>Loading data...</p>
    if(error) return <p>{error}</p>

    const onSubmit = async({url}) => {
        try {
            if(newOriginId){
                await updateData(newOriginId,url)
                setnewOriginId("")
            }else{
               await addData(url)
            }
            resetField("url")
            
        } catch (error) {
            const {code,message} = erroresFirebase(error.code)
            setError(code,{ message })
        }
    }

    const handleClickDelete=async nanoid =>{
        await deleteData(nanoid)
    }

    const handleClickEdit=(item) =>{
        setValue("url",item.origin)
        
        setnewOriginId(item.nanoid)
    }
    
    
    
    const pathURL = window.location.href
    
    const handleClickCopy = async (nanoid) =>{
        await navigator.clipboard.writeText(window.location.href + nanoid)
        setCopy(()=> ({[nanoid] : true}))

    }
    return(
        <>
            <Title text="HOME"/>
            <form 
                className="m-8"
                onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    type="text" 
                    placeholder="ex:http://example.com"
                    {...register("url", {
                        required,
                        pattern: patternURL
                    })}
                    label="Ingresa tu URL"
                    error={errors.url}
                >
                    <FormError error={errors.url}/>
                </FormInput>
               {
                    newOriginId ?(
                        <Button 
                            type="submit" 
                            text="Edit Url" 
                            color="green" 
                            loading={loading.updateData} />
                    ):(
                        <Button 
                            type="submit" 
                            text="Add Url" 
                            color="blue" 
                            loading={loading.addData} />
                    )
                } 
            </form>
            {
                data.map(item =>(
                    <div 
                    className="m-8 p-6 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700"
                    key={item.nanoid}
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pathURL}{item.nanoid}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.origin}</p>
                        <div className="flex space-x-2">
                            <Button 
                                type="button" 
                                text="delete" 
                                color="red" 
                                loading={loading[item.nanoid]}
                                onClick={()=>handleClickDelete(item.nanoid)}
                            />
                            <Button 
                                type="button" 
                                text="Edit" 
                                color="yellow" 
                                onClick={()=>handleClickEdit(item)}
                            />
                            <Button 
                                type="button" 
                                text={copy[item.nanoid] ? "Copied" : "Copy"}
                                color="blue" 
                                onClick={()=>handleClickCopy(item.nanoid)}
                            />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Home