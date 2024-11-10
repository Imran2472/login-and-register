import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import toast, { Toaster } from 'react-hot-toast';
function Login() {
  const {Login} = useContext(AppContext)
  const navigate = useNavigate()
  const location = useLocation()
    const [logininfo, setloginInfo] = useState({
      email: "",
      password: ""
    })
    const HandleChange = (e)=>{
      const {name, value} = e.target
      setloginInfo({...logininfo, [name]: value})
    }

    const {email, password} = logininfo
    const handleSubmit = async (e) => {
        e.preventDefault()
       const response = await Login(email, password)
       if(response.success){
           toast.success(response.message);
           navigate(location.state|| "/")
           window.location.reload()
       }
       else{
           toast.error(response.message);
       }
    }

  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[100vh]'>
    <form action="" className='w-[500px] max-w-[100%] border shadow-lg bg-slate-50 rounded-lg p-[2rem] flex flex-col gap-3' onSubmit={handleSubmit}> 
        <h1 className='text-center text-[22px] font-medium text-slate-700'>Sign in</h1>
  <div className="w-full">
        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2 w-full">
              <input
                id="email"
                type="email"
                placeholder="Enter Your email"
                autoComplete="email"
                name="email"
                onChange={HandleChange}
                value={logininfo.email}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
  <div className="w-full">
        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2 w-full">
              <input
                id="password"
                type="password"
                placeholder="Enter Your password"
                autoComplete="password"
                name="password"
                onChange={HandleChange}
                value={logininfo.password}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <button className='btn bg-blue-100 py-[10px] px-20px text-center'>Login</button>
        <p className='text-center text-sm text-gray-500'>Don't have an account? <Link to="/register">Sign Up</Link></p>
        <p className='text-center text-sm text-gray-500'><Link to="/forget-password">Forget Password </Link></p>
  </form>
</div>
  )
}

export default Login
