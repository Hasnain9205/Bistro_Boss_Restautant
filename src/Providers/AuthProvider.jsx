import { useEffect, useState } from "react"
import { createContext } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.condig";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


export const AuthContex = createContext(null)
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = UseAxiosPublic()

    const googleSignIn = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (name,photo) =>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
      })
    }

    const logOut = () => {
        setLoading(true)
       return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            if(currentUser){
              //get token and store client;
              const userInfo = {email: currentUser.email};
              axiosPublic.post('/jwt',userInfo)
              .then(res=>{
                if(res.data.token){
                  localStorage.setItem('access-token',res.data.token)
                }
              })
            }
            else{
              //TODO: remove token
              localStorage.removeItem('access-token')
            }
            console.log('this is currentUser',currentUser)
            setLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    },[axiosPublic])

   const valueInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
    
    }
  return (
    <AuthContex.Provider value={valueInfo}>
      {children}
    </AuthContex.Provider>
  )
}
