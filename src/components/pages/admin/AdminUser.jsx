import React from 'react'
import AdminSidebar from './AdminSidebar'

function AdminUser() {
  return (
    <>
        <div className="flex">
            <AdminSidebar/>
            <div className="user">
                <table>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default AdminUser