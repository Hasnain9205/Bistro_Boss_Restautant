import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios";
import update from '../../../src/assets/icon/edit 1.png'
import { Helmet } from "react-helmet-async";
import { RiDeleteBinLine } from "react-icons/ri";
import UseMenu from "../../Hooks/UseMenu";
import { Link } from "react-router-dom";

export default function manageItems() {
    const [menu, ,refetch] = UseMenu();
  const axiosSecure = UseAxios()

    const handleDeleteItem = (item) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
          console.log(res.data)
          if(res.data.deletedCount > 0){
            refetch();
              Swal.fire({
                title: `${item.name} has been Deleted!`,
                text: "Your file has been deleted.",
                icon: "success"
              });
        }

        }
      });
    }
  return (

    <div className="mt-6">
      <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---Hurry Up!---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>MANAGE ALL ITEMS</h1>
    </div>

    <div className=" bg-gray-100 mx-32 px-8 space-y-12  mt-6">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <div className="pt-4">
        <h1 className="text-xl font-bold">TOTAL ITEMS: {menu.length}</h1>
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
        <th>ACTION</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index)=><tr key={item._id}>
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
            <Link to={`/dashboard/update/${item._id}`}>
            <button
             className="btn btn-ghost btn-xs bg-red-500"><img src={update} alt="" className="w-4" /></button>
            </Link>
          </th>
          <th>
            <button
            onClick={() => handleDeleteItem(item)}
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
