import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result)
                // update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                fetch(`https://coffee-store-server-nine-liart.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info updated in DB', data)
                    })

            })
            .catch(error => console.log(error.message))


    }
    return (
        <div className='w-11/12 container mx-auto my-6'>
            <Helmet>
                <title>Sign In | Espresso Emporium</title>
            </Helmet>
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3 w-fit'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
            </div>
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold font-rancho">Sign In</h1>
                <p className="font-medium text-black/80">Get all Discount Pro coupons with a single click by registering in simple steps.</p>
            </div>

            <div className="card bg-[#F5F4F1] w-11/12 mx-auto lg:max-w-screen-md shrink-0">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password" className="input" required />

                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-btnBg font-rancho text-xl">Sign In</button>
                    </div>
                </form>

                <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-[29.5%] lg:top-[34.5%]">
                    {
                        showPassword ? <FaEyeSlash /> : <FaRegEye />
                    }
                </button>
                <div className="divider"></div>

                <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                    <div className="flex flex-col justify-center">
                        <p>Do not have an account ?</p>
                        <Link to='/signUp' className="btn bg-white border-none"><button>Sign Up</button></Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Or</p>
                        <button className="btn bg-white border-none">Continue with Google
                            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                        </button>
                    </div>

                    {/* <button onClick={handleLogOut} className="btn">Log out</button> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;