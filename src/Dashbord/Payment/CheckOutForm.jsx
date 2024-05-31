import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import UseCarts from "../../Hooks/UseCarts";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CheckOutForm() {
    const [clientSecret,setClientSecret] = useState('')
    const [error,setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxios();
    const [cart,refetch] = UseCarts();
    const {user} = UseAuth();
    const navigate = useNavigate()
    const [transactionId,setTransactionId] = useState()
    const totalPrices = cart.reduce((total,item)=> total + item.price, 0)

    useEffect( () =>{
        axiosSecure.post('/create-payment-intent', {price: totalPrices})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrices])


    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            setError(error.message)
            console.log('payment error',error);
        } else{
            setError('')
            console.log('payment method',paymentMethod)
        }

        //confirm card payment 
        const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method:{
              card: card,
              billing_details:{
                name: user?.displayName || 'anonymous',
                email: user?.email || 'anonymous'
              }
            }
          })
          if(confirmError){
            console.log('confirm Error',confirmError)
          }else{
            console.log('payment intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
              console.log('paymentIntent ID',paymentIntent.id)
              setTransactionId(paymentIntent.id)

              //now save the payment on the database;
              const payment = {
                email: user.email,
                price: totalPrices,
                transactionId: paymentIntent.id,
                date: new Date(),//utc date convert,user moment js to.
                cartIds: cart.map(item=>item._id),
                menuIds: cart.map(item=>item.menuId),
                status: 'pending'
              }
              const res = await axiosSecure.post('/payments',payment)
              console.log('payment saved',res)
              refetch();
              if(res.data?.paymentResult.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Payment is successfully done",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/dashboard/paymentHistory')
              }
            }
          }

    }


  return (
    <form onSubmit={handleSubmit}>
       <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="bg-[#D1A054] btn w-52 mt-6 ml-52" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600 text-center mt-2">{error}</p>
      {transactionId && <p className="text-green-600 text-center">Your Transaction ID: {transactionId}</p>}
    </form>
  )
}
