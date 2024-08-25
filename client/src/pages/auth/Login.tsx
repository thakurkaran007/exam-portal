import  { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const f = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/login/success', { withCredentials: true });
                console.log(response.data.user.signUp)
                if(response.data.user.signUp==false){
                    navigate('/signup')
                }
                else{
                    navigate('/dashboard')
                } 
            } catch (error) {
                console.log(error)
            }
        }
        f();
    },[])

  return (
    <div>
      Login
    </div>
  )
}

export default Login

    