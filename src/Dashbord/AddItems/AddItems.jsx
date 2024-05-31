import { useForm } from 'react-hook-form';
import logo from '../../../src/assets/icon/cutlery 1.png';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import UseAxios from '../../Hooks/UseAxios';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function AddItems() {
  const { register, handleSubmit, reset } = useForm()
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxios()

  const onSubmit = async (data) =>{
    console.log(data)
    //image upload to imagebb and then get url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if(res.data.success){
      //now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url
      }
      //
      const menuRes = await axiosSecure.post('/menu',menuItem)
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        //show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data)
  };

  return (
    <div className="mt-6">
    <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---Whats new?---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>ADD AN ITEM</h1>
    </div>

    <div>
    <div className=" bg-base-200 mx-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full">
      <form
       onSubmit={handleSubmit(onSubmit)} 
      className="card-body space-y-4">
        <div className="form-control">
            <h1 className="pb-3">Recipe name*</h1>
          <input {...register("name",{required: true})} 
          type="text" placeholder="Recipe name" className="input input-bordered" required />
        </div>
        <div className="flex gap-8">
            <div className="flex-1">
                <h1 className="pb-3">Category*</h1>
            <select  {...register("category",{required: true})}
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
            {...register("price",{required: true})} 
            type="number" 
            placeholder="Price" 
            className="input input-bordered w-full" required />
            </div>
        </div>
        <div className="w-full">
        <textarea  {...register("recipe",{required: true})}
         placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
        </div>
        <div>
        <input  {...register("image",{required: true})}
         type="file" className="file-input bg-[#F3F3F3] w-full max-w-xs" />
        </div>
        <div className="flex">
          <button className="py-2 btn shadow-xl flex items-center gap-2 bg-[#D1A054] px-4 font-bold">Add Item <img className="w-5" src={logo} alt="" /></button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
