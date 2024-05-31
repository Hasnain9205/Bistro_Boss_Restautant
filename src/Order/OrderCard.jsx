import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth"
import { useLocation, useNavigate } from "react-router-dom";

import UseAxios from "../Hooks/UseAxios";
import UseCarts from "../Hooks/UseCarts";

export default function OrderCard({item}) {
  const Navigate = useNavigate()
  const location = useLocation()
    const {image,name,price,recipe,_id} = item
    const {user} = UseAuth()
    const axiosSecure = UseAxios()
    const [ , refetch] = UseCarts()

    const handleAdd = () =>{
      if(user && user.email){
        //send cart item to database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=> {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              title: "Added successfully",
              text: "You clicked the button!",
              icon: "success"
            });
            refetch()
          }
         
        })
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            Navigate('/login',{state: {from:location}})
          }
        });
      }
    }
  return (
    <div>
      <div className=" w-80  bg-base-100 shadow-xl">
  <figure className="relative">
    <img  src={image} alt="Shoes" className="w-96 h-52 " />
    <p className=" absolute bottom-2 ml-2 text-white bg-black p-1">Price: {price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions">
      <button 
      onClick={handleAdd}
      className="btn btn-outline border-b-[#D1A054] text-[#D1A054] border-b-4">ADD TO CARD</button>
    </div>
  </div>
</div>
    </div>
  )
}
