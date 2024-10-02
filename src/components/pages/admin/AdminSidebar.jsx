import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <>
        <div className="sidebar bg-[teal] w-[80px] md:w-60 h-screen mr-6">
            <div className="tx pt-[7em]">
                <h1 className='hidden md:flex font-bold text-2xl px-10 text-[white]'>Esuku Josiah</h1>
                <h2 className='hidden md:flex text-lg text-[white] px-14'>Administrator</h2>
            </div>
            <ul className='md:pt-12 text-xl'>
                <Link to="/dash">
                    <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                        <i className="fa-solid fa-house pt-1 md:px-3"></i>
                        <h1 className='hidden md:flex'>Home</h1>
                    </li>
                </Link >
                <Link to="/user">
                    <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                        <i className="fa-solid fa-users pt-1 md:px-3"></i>
                        <h1 className="hidden md:flex">Users</h1>
                    </li>
                </Link>
                <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                    <i className="fa-solid fa-layer-group pt-1 md:px-3"></i>
                    <h1 className='hidden md:flex'>Categories</h1>
                </li>
                <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                    <i className="fa-solid fa-shop pt-1 md:px-3"></i>
                    <h1 className='hidden md:flex'>Products</h1>
                </li>
                <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                    <i className="fa-solid fa-truck-fast pt-1 md:px-3"></i>
                    <h1 className='hidden md:flex'>Orders</h1>
                </li>
                <li className='flex text-[white] px-8 py-4 md:py-2 hover:bg-[white] hover:text-[teal]'>
                    <i class="fa-solid fa-x pt-1 md:px-3"></i>
                    <h1 className='hidden md:flex'>Log Out</h1>
                </li>
            </ul>
        </div>
    </>
  )
}

export default AdminSidebar