import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth"
import UseAxios from "./UseAxios";

export default function UseAdmin() {
    const {user} = UseAuth();
    const axiosSecure = UseAxios()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.Admin;
        }
    })
  return [isAdmin,isAdminLoading];
}
