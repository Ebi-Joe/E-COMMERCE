import React from 'react'
import AdminSidebar from './AdminSidebar'

function AdminDashboard() {
  return (
    <>
        <div className="board flex">
            <AdminSidebar/>
            <div className="dashboard flex mt-16 grid grid-col-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="category bg-[grey] mx-2 m-2 w-[30vh] md:w-[25vw] lg:w-[17vw] h-[20vh]">

                </div>
                <div className="product bg-[silver] mx-2 m-2 w-[30vh] md:w-[25vw] lg:w-[17vw] h-[20vh]">

                </div>
                <div className="user bg-[gray] mx-2 m-2 w-[30vh] md:w-[25vw] lg:w-[17vw] h-[20vh]">
                    
                </div>
                <div className="orders bg-[silver] mx-2 m-2 w-[30vh] md:w-[25vw] lg:w-[17vw] h-[20vh]">
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminDashboard