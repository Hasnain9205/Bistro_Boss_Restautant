
import { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider'

export default function UseAuth() {
    const auth = useContext(AuthContex)
  return  auth;
}
