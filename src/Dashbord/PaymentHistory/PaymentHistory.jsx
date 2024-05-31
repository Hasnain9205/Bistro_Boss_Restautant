import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Hooks/UseAxios";

export default function PaymentHistory() {
    const {user} = UseAuth();
    const axiosSecure = UseAxios()


    const { data: payments = [] } = useQuery({
        queryKey:['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
  return (
    <div className="mt-10">
    <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---At a Glance!---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>PAYMENT HISTORY</h1>
    </div>

    <div className=" bg-gray-100 mx-32 px-8 space-y-2  mt-2">
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>

      <div className="pt-6 ">
        <h1 className="text-xl font-bold">Total Payments:{payments.length}</h1>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] px-2">
      <tr>
        <th>NO.</th>
        <th>EMAIL</th>
        <th>CATEGORY</th>
        <th>TOTAL PRICE</th>
        <th>PAYMENT DATE</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
        {
            payments.map((payment,index)=><tr key={payment._id}>
            <td>
                {index + 1}
            </td>
          <td>
           {payment.email}
          </td>
          <td>
            {payment.category}
          </td>
          <td>
          {payment.price}
          </td>
          <td>{payment.date}</td>
          <td>{payment.status}</td>
          
        </tr>
        )}
      </tbody>
  </table>
  </div>
</div>
</div>
  )
}
