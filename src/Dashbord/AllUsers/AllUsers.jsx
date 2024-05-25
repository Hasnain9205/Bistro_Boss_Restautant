import { useQuery } from "@tanstack/react-query"
import UseAxios from "../../Hooks/UseAxios"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { RiDeleteBinLine } from "react-icons/ri"
import { FaUsers } from "react-icons/fa"

export default function AllUsers() {
  const axiosSecure = UseAxios()
const { refetch,data: users = [] } = useQuery({
  queryKey: ['users'],
  queryFn: async () =>{
    const res = await axiosSecure.get('/users');
    return res.data
  }
})
const handleDeleteUser =  id => {
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
      axiosSecure.delete(`/users/${id}`)
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

const handleMakeAdmin = user =>{
  axiosSecure.patch(`/users/admin/${user._id}`)
  .then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount > 0){
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an Admin Now!`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  })
  
}
  return (
    <div className="mt-6">
     <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---How many??---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>MANAGE ALL USERS</h1>
    </div>

    <div className=" bg-gray-100 mx-32 px-8 space-y-12  mt-6">
      <Helmet>
        <title>Bistro Boss | all users</title>
      </Helmet>
      <div >
        <h1 className="text-xl font-bold">TOTAL USERS: {users.length}</h1>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] px-2">
      <tr>
        <th>
          NO.
        </th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=><tr key={user._id}>
          <th>
            {index + 1}
          </th>
          <td>
          <h1>{user.name}</h1>
          </td>
          <td>
            {user.email}
          </td>
          <td>
          {user.role === 'Admin' ? 'ADMIN' : <button
            onClick={() => handleMakeAdmin(user)}
             className="btn bg-[#D1A054] text-white text-xl"><FaUsers />
          </button>}
          </td>
          <th>
            <button
            onClick={() => handleDeleteUser(user._id)}
             className="btn bg-red-500 text-white text-xl"><RiDeleteBinLine /></button>
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
