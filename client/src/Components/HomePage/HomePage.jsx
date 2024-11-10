import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
function HomePage() {
  return (
    <>
    <Navbar/>
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-blue-100 flex-col'>
        <h1 className='text-4xl font-bold text-center'>Welcome to React App!</h1>
        <div className="product">
                <div className="name">imran</div>
                <div className="price">123</div>
            </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage
