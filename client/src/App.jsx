import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import toast, { Toaster } from 'react-hot-toast';
import Profile from './Components/Profile/Profile.jsx';
import UserDashboard from './Components/Profile/UserDashboard.jsx';
import { useContext } from 'react';
import AppContext from './Components/Context/AppContext.jsx';
import Loading from './Components/Loading/Loading.jsx';
import AdminDashboard from './Admin/AdminDashboard.jsx';
import ForgetPassword from './Components/Login/ForgerPassword.jsx';
function App() {
  const {Authentication, user} = useContext(AppContext)
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/user-profile' element={<Profile />}/>
    <Route path='/forget-password' element={<ForgetPassword />}/>
    {
      Authentication && user?.role == 'user' ? (
        <Route path='/user-dashboard' element={<UserDashboard />}/>
      ) : (
        <Route path='/user-dashboard' element={<Loading />}/>
      )
    }
    {
      Authentication && user?.role == 'admin' ? (
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      ) : (
        <Route path='/admin-dashboard' element={<Loading />}/>
      )
    }
   </Routes>
   <Toaster />
   </>
  )
}

export default App
