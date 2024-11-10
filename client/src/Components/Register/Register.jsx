import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import AppContext from '../Context/AppContext';
function Register() {
  const {Register} = useContext(AppContext)
  const navigate = useNavigate()
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  
  const HandleChange = (e) =>{
    const {name, value} = e.target
    setFormData({...FormData, [name]:value})
  }
  const {username, email, password} = FormData
  const HandleSubmit = async (e) => {
    e.preventDefault()
   const response = await Register(username, email, password)
   
   if(response.success){
    toast.success(response.message);
    navigate("/login")
    }
    else{
        toast.error(response.Message);
    }
}
  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[100vh]'>
        <form action="" className='w-[500px] max-w-[100%] border shadow-lg bg-slate-50 rounded-lg p-[2rem] flex flex-col gap-3' onSubmit={HandleSubmit}> 
            <h1 className='text-center text-[22px] font-medium text-slate-700'>Sign Up</h1>
      <div className="w-full">
            <div className="w-full">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2 w-full">
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="username"
                    name="username"
                    value={FormData.username}
                    onChange={HandleChange}
                    className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
                  />
                </div>
              </div>
            </div>
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
                    value={FormData.email}
                    onChange={HandleChange}
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
                    name="password"
                    value={FormData.password}
                    onChange={HandleChange}
                    placeholder="Enter Your password"
                    autoComplete="password"
                    className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
                  />
                </div>
              </div>
            </div>
            <button type='submit' className='btn bg-blue-100 py-[10px] px-20px text-center'>Register</button>
            <p className='text-sm text-gray-400 mt-[10px] text-center'>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register
