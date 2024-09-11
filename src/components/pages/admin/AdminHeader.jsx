import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <>
        <div className="admin">
              <div class="wrapper">
                
                <div class="sidebar">

                  <div className="profile text-center py-14">

                    <h3 className='font-bold text-2xl text-[#fff]'>Esuku Josiah</h3>
                    <p className='text-[#fff]'>Administrator</p>

                  </div>

                  <div className="item">
                      <ul>
                        <li>
                          <Link to="/">
                              <div className='flex text-lg text-[white] py-3 px-3 hover:text-[teal]'>
                                  <i className="fas fa-home px-4 pt-1"></i>
                                  <h3>Home</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className='flex text-lg text-[white] py-2 px-3 hover:text-[teal]'>
                                  <i className="fas fa-user-friends px-4 pt-1"></i>
                                  <h3>Users</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className='flex text-lg text-[white] py-2 px-3 hover:text-[teal]'>
                                  <i className="fas fa-store px-4 pt-1"></i>
                                  <h3>Products</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-3 px-3 hover:text-[teal]">
                                  <i class="fas fa-chart-line px-4 pt-1"></i>
                                  <h3>Reports</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-2 px-3 hover:text-[teal]">
                                  <i class="fas fa-user-shield px-4 p-1"></i>
                                  <h3>Admin</h3>
                              </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                              <div className="flex text-lg text-[white] py-3 px-3 hover:text-[teal]">
                                  <i class="fas fa-cog px-4 pt-1"></i>
                                  <h3>Settings</h3>
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