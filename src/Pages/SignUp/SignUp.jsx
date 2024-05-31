import bgImg from '../../../src/assets/reservation/wood-grain-pattern-gray1x.png'
import loginImg from '../../../src/assets/others/rr.png'
import { Link, useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { AuthContex } from '../../Providers/AuthProvider'
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import UseAxiosPublic from '../../Hooks/UseAxiosPublic'
import SocialLogIn from '../../Components/SocialLogin/SocialLogIn'
import UseAuth from '../../Hooks/UseAuth'

export default function SignUp() {
  const {createUser,updateUserProfile} = UseAuth()
  const Navigate = useNavigate()
  const axiosPublic = UseAxiosPublic()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          updateUserProfile(data.name,data.photoURL)
          .then( () =>{
            //create user entry in database;
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              if(res.data.insertedId){
                console.log('user added the data base')
                reset()
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
                Navigate('/')
              }
            })
          
          })
          .catch(error=>console.log(error))
        })
      }
      
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
  <div style={{backgroundImage:`url(${bgImg})`}} className="w-[920px] p-4 mt-12 ml-44 shadow-2xl border-2">
  <div className="hero-content">
    <img className='w-[400px]' src={loginImg} alt="" />

    <div className="w-[500px] ">
      <h1 className='text-center text-3xl font-bold'>SignUp</h1>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'  {...register("name")} placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoUrl'  {...register("Photo")} placeholder="Photo URL" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  {...register("email")} placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", {
            required: true,
            minLength: 6, 
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
             })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === "minLength" && (
        <p className='text-red-600'>Password must be 6 characters</p>
      )}
          {errors.password?.type === "maxLength" && (
        <p className='text-red-600'>Password must be less than 20 characters</p>
      )}
          {errors.password?.type === "pattern" && (
        <p className='text-red-600'>Password must have one uppercase one lowercase one number and one special character</p>
      )}
        </div>

        <div className="form-control mt-6">
        <input className="btn bg-[#D1A054] font-bold text-white" type="submit"  value="SignUp"/>
  
          <h1 className='text-center text-[#D1A054] mt-2'>New here? Create a New Account! <Link to='/login'><span className='text-blue-400 underline'>Click Here</span></Link></h1>
          <p className='text-center mt-2'>Or sign in with</p>
        </div>
      </form>
      <div>
  <SocialLogIn></SocialLogIn>
  </div>
    </div>
  </div>
</div>
    </div>
  )
}
