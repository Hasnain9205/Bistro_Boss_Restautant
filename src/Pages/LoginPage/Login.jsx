import bgImg from '../../../src/assets/reservation/wood-grain-pattern-gray1x.png'
import loginImg from '../../../src/assets/others/ll.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogIn from '../../Components/SocialLogin/SocialLogIn';



export default function Login() {
  const Navigate = useNavigate()
  const location = useLocation()
  const [disabled,setDisabled] = useState(true)
  const {signIn} = useContext(AuthContex)

  const from = location.state ?.from?.pathname || '/'

  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        title: "User LogIn Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      Navigate (from,{ replace:true })
    })
  }

  const handleValidateCaptcha = e =>{
    const Value = e.target.value;
    if(validateCaptcha(Value) === true){
      setDisabled(false)
      alert('Captcha Matched');
      
    }
    else {
      alert('Captcha Does Not Match');
  }
  }


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | SignIn</title>
      </Helmet>
          <div style={{backgroundImage:`url(${bgImg})`}} className="w-[920px] p-4 mt-12 ml-44 shadow-2xl border-2">
  <div className="hero-content">
    <img className='w-[400px]' src={loginImg} alt="" />

    <div className="w-[500px] ">
      <h1 className='text-center text-3xl font-bold'>Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className='mt-2 space-y-2'>
         
         <label className="label">
         <LoadCanvasTemplate />
          </label>
         <input onBlur={handleValidateCaptcha} type="text" placeholder="Type Captcha" className="input input-bordered w-full" required />

         </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn bg-[#D1A054] font-bold text-white">Login</button>
          <h1 className='text-center text-[#D1A054] mt-2'>New here? Create a New Account!<Link to='/signUp'> <span className='text-blue-400 underline'>Click Here</span></Link></h1>
          <p className='text-center mt-2'>Or sign in with</p>
        </div>
      </form>
      <SocialLogIn></SocialLogIn>
    </div>
  </div>
</div>
    </div>
  )
}
