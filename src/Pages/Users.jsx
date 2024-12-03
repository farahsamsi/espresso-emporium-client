import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPen } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-nine-liart.vercel.app/users/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className='w-11/12 container mx-auto my-7'>
            <Helmet>
                <title>Users | Espresso Emporium</title>
            </Helmet>
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
                <div>
                    <h1 className="text-3xl font-rancho text-center my-5">Users : {users.length}</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Last Signed In</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row  */}
                                {
                                    users.map(user => <tr key={user._id}>
                                        <th></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt || 'Not available'}</td>
                                        <td>{user.lastSignInTime || 'Not available'}</td>
                                        <td className=''>
                                            <button className="btn bg-[#3C393B] text-white text-xl max-w-fit"><FaPen /></button>
                                            <button onClick={() => handleDelete(user._id)} className="btn bg-[#EA4744] text-white text-xl max-w-fit"><MdDelete /></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;