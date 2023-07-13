import { useContext } from "react"
import { UserContext } from "../../context/UserProvider"
import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const LayoutRequireAuth = () =>{
    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to ="/login"/>
    }

    return (
        <div className="container mx-auto">
            <Outlet/>
        </div>
    )
}

export default LayoutRequireAuth