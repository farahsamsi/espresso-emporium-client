import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

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
                console.log(result.user)
            })
            .catch(error => console.log(error.message))

    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="my-6">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold font-rancho">Register Now</h1>
                <p className="font-medium text-black/80">Get all Discount Pro coupons with a single click by registering in simple steps.</p>
            </div>

            <div className="card bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border relative">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your display photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password" className="input input-bordered" required />

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
                        <Link to='/signIn' className="btn"><button>Login</button></Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Or</p>
                        <button className="btn">Continue with Google
                            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;