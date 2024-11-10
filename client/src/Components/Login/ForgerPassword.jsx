import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import toast, { Toaster } from 'react-hot-toast';
function ForgetPassword() {
  const {ForgetPass} = useContext(AppContext)
  const navigate = useNavigate()
    const [Reset, setReset] = useState({
      email: "",
      newPassowrd: ""
    })
    const HandleChange = (e)=>{
      const {name, value} = e.target
      setReset({...Reset, [name]: value})
    }

    const {email, newPassowrd} = Reset
    const handleSubmit = async (e) => {
        e.preventDefault()
       const response = await ForgetPass(email, newPassowrd)
       if(response.success){
           toast.success(response.message);
           navigate("/login")
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
                value={Reset.email}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
  <div className="w-full">
        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            New Password
          </label>
          <div className="mt-2 w-full">
              <input
                id="password"
                type="password"
                placeholder="Enter new Password"
                autoComplete="password"
                name="newPassowrd"
                onChange={HandleChange}
                value={Reset.newPassowrd}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <button className='btn bg-blue-100 py-[10px] px-20px text-center'>Reset Password</button>
        <p className='text-center text-sm text-gray-500'>Don't have an account? <Link to="/register">Sign Up</Link></p>
  </form>
</div>
  )
}

export default ForgetPassword
