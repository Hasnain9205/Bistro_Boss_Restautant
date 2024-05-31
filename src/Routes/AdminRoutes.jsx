import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin"
import UseAuth from "../Hooks/UseAuth"

export default function AdminRoutes({children}) {
    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-lg text-success mt-52 ml-[600px] p-10"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
}

