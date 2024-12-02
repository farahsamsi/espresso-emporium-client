import React, { useContext, useState } from 'react';
import { FaArrowLeftLong, FaEyeSlash, FaRegEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, photo, createdAt }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }
                    })

            })
            .catch(error => console.log(error.message))


    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-11/12 container mx-auto my-6'>
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
            </div>
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold font-rancho">Register Now</h1>
                <p className="font-medium text-black/80">Get all Discount Pro coupons with a single click by registering in simple steps.</p>
            </div>

            <div className="card bg-[#F4F3F0] w-11/12 mx-auto lg:max-w-screen-md shrink-0 relative">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your display photo URL" className="input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password" className="input" required />

                    </div>
                    {/* {
                        error && <p className="text-red-600">{error}</p>
                    } */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-btnBg font-rancho text-xl">Register</button>
                    </div>
                </form>

                <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-[48.3%] lg:top-[54.5%]">
                    {
                        showPassword ? <FaEyeSlash /> : <FaRegEye />
                    }
                </button>
                <div className="divider"></div>

                <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                    <div className="flex flex-col justify-center">
                        <p>Already have an account ?</p>
                        <Link to='/signIn' className="btn bg-white border-none"><button>Sign In</button></Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Or</p>
                        <button className="btn bg-white border-none">Continue with Google
                            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;