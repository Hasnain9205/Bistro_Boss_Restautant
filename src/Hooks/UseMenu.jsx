// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

export default function UseMenu() {
    const axiosPublic = UseAxiosPublic()
    // const [menu,setMenu] = useState([])
    // const [loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])
    // return [menu,loading]
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return [menu,loading,refetch]
}
