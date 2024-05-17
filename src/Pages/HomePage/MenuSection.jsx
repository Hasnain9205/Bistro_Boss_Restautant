import { useEffect, useState } from "react"
import MenuItem from "../../Shared/MenuItem"

export default function MenuSection() {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('/public/Menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(item=>item.category === "popular")
            setMenu(popularItem)})
    },[])
  return (
    <div className="mt-20">
            <div>
            <h1 className='text-center text-2xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-4'>---From 11:00am to 10:00pm---</h1>
            <h1 className=' text-4xl font-normal border-b-4 pb-6 mb-12 text-center w-96 mx-auto'>ORDER ONLINE</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}
