import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function Navbar() {
    const [show , setShow] = useState(false)
    const {user, Authentication, Logout} = useContext(AppContext)
    const handleClick = () => {
        setShow(!show)
    }
  return (
    <header className='bg-slate-100 shadow-sm py-5'>
        <nav className='flex justify-between items-center lg:px-20 px-[10px]'>
            <div className="logo text-[24px] font-semibold text-slate-800">Wellcome</div>
            <div className={show ? "active" : ""} id='navbar'>
                <ul className='flex items-center gap-1'>
                    <li><Link className='text-[16px] font-medium text-slate-800 px-[20px] py-[10px] hover:text-blue-600'>Home</Link></li>
                    <li><Link className='text-[16px] font-medium text-slate-800 px-[20px] py-[10px] hover:text-blue-600'>Category</Link></li>
                    <li><Link className='text-[16px] font-medium text-slate-800 px-[20px] py-[10px] hover:text-blue-600'>Product</Link></li>
                    {
                        user?.role == 'user' && (
                            <li><Link className='text-[16px] font-medium text-slate-800 px-[20px] py-[10px] hover:text-blue-600'>Cart</Link></li>
                        )
                    }
                 

                    {
                        Authentication ? (     
                    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
        {user?.name}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link to="/user-profile"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile
            </Link>
          </MenuItem>
          {
            Authentication && user?.role == 'admin' ? (
              <MenuItem>
              <Link to="/admin-dashboard"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Dashboard
          </Link>
        </MenuItem>
            
            ) : (
              <MenuItem>
                <Link to="/user-dashboard"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Dashboard
            </Link>
          </MenuItem>
            )
          }
          
            <MenuItem>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                onClick={Logout}>
                Sign out
              </button>
            </MenuItem>
        </div>
      </MenuItems>
                    </Menu>
                        ) : (
                            <li><Link to={"/login"} className='text-[16px] font-medium text-slate-800 pl-[20px] py-[10px] hover:text-blue-600'>Login</Link></li>
                        )
                    }
                </ul>
            </div>
            <li className='hidden bars'><Link className='text-[16px] font-medium text-slate-800 pl-[20px] py-[10px] hover:text-blue-600'><i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleClick}></i></Link></li>
        </nav>
    </header>
  )
}

export default Navbar
