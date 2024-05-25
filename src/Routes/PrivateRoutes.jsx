import { useContext } from "react"
import { AuthContex } from "../Providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoutes({children}) {
    const {user,loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-infinity loading-lg text-success mt-52 ml-[600px] p-10"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
}
