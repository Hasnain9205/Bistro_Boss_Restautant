import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function SocialLogIn() {
    const { googleSignIn } = UseAuth()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
  return (
    <div className="flex gap-8 items-center justify-center ">
      <div>
      <button className="btn btn-circle btn-outline">
      <FaFacebookF />
     </button>
      </div>
      <div>
      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
      <FaGoogle />
     </button>
      </div>
      <div>
      <button className="btn btn-circle btn-outline">
      <FaGithub />
     </button>
      </div>
    </div>
  )
}
