import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";


//TODO: add publishable key.
const stripePromise = loadStripe(import.meta.env. VITE_PAYMENT_GATEWAY_PK)

export default function Payment() {
  return (
    <div className="mt-20">
             <div>
        <h1 className='text-center text-xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-2'>---PLEASE PAY TO EAT---</h1>
        <h1 className=' text-2xl font-normal border-b-4 pb-2 mb-12 text-center w-96 mx-auto'>PAYMENT</h1>
    </div>
    <div>
    <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
    </div>
    <div className="mx-52">
    <Elements stripe={stripePromise}>
    <CheckOutForm></CheckOutForm>
    </Elements>
    </div>
      
    </div>
  )
}
