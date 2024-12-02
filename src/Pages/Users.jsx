import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
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
                fetch(`http://localhost:5000/users/${_id}`, {
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
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
                <div>
                    <h1 className="text-3xl">Users : {users.length}</h1>
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
                                {/* row 1 */}
                                {
                                    users.map(user => <tr key={user._id}>
                                        <th></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt || 'Not available'}</td>
                                        <td>{user.lastSignInTime || 'Not available'}</td>
                                        <td>
                                            <button className='btn'>E</button>
                                            <button onClick={() => handleDelete(user._id)} className='btn'>X</button>
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