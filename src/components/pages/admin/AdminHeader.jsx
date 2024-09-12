import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <>
        <div className="admin grid grid-cols-3">
              <div className="wrapper">
                
                <div className="sidebar w-[100pxvw] md:w-[260px]">

                  <div className="profile text-center py-14">

                    <h3 className='hidden md:block font-bold text-2xl text-[#fff]'>Esuku Josiah</h3>
                    <p className='hidden md:block text-[#fff]'>Administrator</p>

                  </div>

                  <div className="item">
                      <ul>
                        <li>
                          <Link to="/adminD">
                              <div className='flex text-lg text-[white] py-3 px-3 hover:text-[teal]'>
                                  <i className="fas fa-home px-4 pt-1"></i>
                                  <h3 className='hidden md:flex'>Home</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className='flex text-lg text-[white] py-2 px-3 hover:text-[teal]'>
                                  <i className="fas fa-user-friends px-4 pt-1"></i>
                                  <h3 className='hidden md:flex'>Users</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className='flex text-lg text-[white] py-2 px-3 hover:text-[teal]'>
                                  <i className="fas fa-store px-4 pt-1"></i>
                                  <h3 className='hidden md:flex'>Products</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-3 px-3 hover:text-[teal]">
                                  <i className="fas fa-chart-line px-4 pt-1"></i>
                                  <h3 className='hidden md:flex'>Reports</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-2 px-3 hover:text-[teal]">
                                  <i className="fas fa-user-shield px-4 p-1"></i>
                                  <h3 className='hidden md:flex'>Admin</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-3 px-3 hover:text-[teal]">
                                  <i className="fas fa-cog px-4 pt-1"></i>
                                  <h3 className='hidden md:flex'>Settings</h3>
                              </div>
                          </Link>
                        </li>

                      </ul>
                  </div>

                </div>

              </div>
        </div>
    </>
  )
}

export default AdminHeader