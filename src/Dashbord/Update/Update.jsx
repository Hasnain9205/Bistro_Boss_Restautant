
import { useForm } from "react-hook-form"
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";


export default function Update() {
  const {name,category,price,recipe,_id} = useLoaderData();


    const { register, handleSubmit } = useForm()
    const axiosSecure = UseAxios()
    const navigate = useNavigate()
  
    const onSubmit = async (data) =>{
      console.log(data)
        //now send the menu item data to the server with the image url
        const menuItem = {
          name: data.name,
          category: data.category,
          recipe: data.recipe,
          price: parseFloat(data.price)
        }

        const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
        console.log(menuRes.data)
        if(menuRes.data.modifiedCount > 0){
          //show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is updated to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/manageItems')
        }
      
    };
  
  
  return (
    <div className="mt-6">
        <h1 className="text-center text-2xl font-bold mb-4">UPDATE ITEM</h1>
    <div>
    <div className=" bg-base-200 mx-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full">
      <form
       onSubmit={handleSubmit(onSubmit)}
      className="card-body space-y-4">
        <div className="form-control">
            <h1 className="pb-3">Recipe name*</h1>
          <input 
          defaultValue={name} 
          {...register("name",{required: true})} 
          type="text" placeholder="Recipe name" className="input input-bordered" required />
        </div>
        <div className="flex gap-8">
            <div className="flex-1">
                <h1 className="pb-3">Category*</h1>
            <select 
            defaultValue={category} 
            {...register("category",{required: true})}
            className="select select-bordered w-full max-w-xs">
             <option>SALAD</option>
             <option>PIZZA</option>
             <option>SOUPS</option>
             <option>DESSERTS</option>
             <option>DRINKS</option>
           </select>
            </div>
            <div className="flex-1">
            <h1 className="pb-3">Price*</h1>
            <input 
            defaultValue={price} 
            {...register("price",{required: true})} 
            type="number" 
            placeholder="Price" 
            className="input input-bordered w-full" required />
            </div>
        </div>
        <div className="w-full">
        <h1 className="pb-3">Recipe*</h1>
        <textarea defaultValue={recipe}  
        {...register("Recipe Details",{required: true})}
         placeholder="Recipe Details"
         className="textarea textarea-bordered textarea-lg w-full" ></textarea>
        </div>
        <div className="">
          <button className="py-2 btn shadow-xl w-full gap-2 bg-[#D1A054] px-4 font-bold">Update Recipe Details</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
