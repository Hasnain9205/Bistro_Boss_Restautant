import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuth from "./UseAuth";

export default function UseCarts() {
    const axiosSecure = UseAxios()
    const {user} = UseAuth()
//tan stack query
const { refetch ,data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () =>{
        const res = await axiosSecure.get(`/carts?.email=${user.email}`)
        return res.data
    }
})
return [cart, refetch];
}

