import { Helmet } from "react-helmet-async";
import UseCarts from "../Hooks/UseCarts"
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxios from "../Hooks/UseAxios";

export default function Cart() {
  const axiosSecure = UseAxios()
    const [cart , refetch] = UseCarts();
    const totalPrices = cart.reduce((total,item)=>total + item.price,0)

    const handleDelete =  id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then((res) => {
            if(res.data.deletedCount > 0){
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
    }
  return (

    <div className="mt-6">
      <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---MY CART---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>WANNA ADD MORE?</h1>
    </div>

    <div className=" bg-gray-100 mx-32 px-8 space-y-12  mt-6">
      <Helmet>
        <title>Bistro Boss | cart</title>
      </Helmet>
      <div className="flex justify-around items-center pt-6">
        <h1 className="text-xl font-bold">TOTAL ORDERS: {cart.length}</h1>
        <h1 className="text-xl font-bold">TOTAL PRICES: ${totalPrices}</h1>
        <button className="btn px-6 rounded-md bg-[#D1A054] font-bold text-white">PAY</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] px-2">
      <tr>
        <th>
          NO.
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index)=><tr key={item._id}>
          <th>
            {index + 1}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image}alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>
            {item.name}
          </td>
          <td>${item.price}</td>
          <th>
            <button
            onClick={() => handleDelete(item._id)}
             className="btn btn-ghost btn-xs bg-red-500"><RiDeleteBinLine /></button>
          </th>
        </tr>)
      }

      </tbody>
  </table>
</div>
    </div>
    </div>


  )
}
