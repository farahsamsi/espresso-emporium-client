import { Link } from 'react-router-dom';
import navLogo from '../assets/images/more/logo1.png'

const Navbar = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signIn'>Sign In</Link></li>
        <li><Link to='/signUp'>Sign Up</Link></li>
    </>
    return (
        <div className="navbar bg-navbarBg bg-center bg-no-repeat bg-cover  text-white font-rancho flex justify-center items-center">
            <div className='flex-grow-0 '>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="space-x-4 flex-1 flex justify-center">
                <div className='w-10 md:w-20'>
                    <img className='w-full' src={navLogo} alt="" />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl">Espresso Emporium</h1>
            </div>

        </div>
    );
};

export default Navbar;