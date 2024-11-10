import axios from 'axios'
import AppContext from './AppContext'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

const AppState = (props) =>{
    const URL = "http://localhost:4000/api"
    const [user, setUser] = useState("")
    const [Authentication, setAuthentication] = useState(false)


    useEffect(()=>{
        GetToken()
        userProfuile()
    }, [localStorage.getItem("token")])

    const GetToken = () =>{
        const Token = localStorage.getItem("token")
        if(Token){
            setAuthentication(true)
        }
    }

    const Register = async(username, email, password) =>{
        const response = await axios.post(`${URL}/register`,{
            username,
            email,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    
    return response.data
    }

    const Login = async(email, password) =>{
        const response = await axios.post(`${URL}/login`,{
            email,
            password
        },
        {
            headers:{
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        localStorage.setItem('token', response.data.JwtToken)
        setAuthentication(true)
        return response.data
    }


    const Logout = () =>{
        localStorage.removeItem("token")
        setUser("")
        setAuthentication(false)
        toast.success("Logged Out Successfully")
    }


    const userProfuile = async () =>{
        const response = await axios.get(`${URL}/profile`,{
            headers:{
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
            },
            withCredentials: true
        })
        console.log("Profile", response);
        setUser(response.data.user)
        return response.data
    }

    const ForgetPass = async(email, newPassowrd) =>{
        const response = await axios.post(`${URL}/forget-password`,{
            email,
            newPassowrd
        },
        {
            headers:{
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    console.log(response);
    return response.data
    }

    return (
        <AppContext.Provider value={{
            Register,
            Login,
            user,
            Authentication,
            setAuthentication,
            Logout,
            userProfuile,
            ForgetPass
        }}>
            {props.children}
        </AppContext.Provider>
    )
 
}

export default AppState