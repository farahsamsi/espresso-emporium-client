import navLogo from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className="navbar bg-navbarBg bg-center bg-no-repeat bg-cover  text-white font-rancho flex justify-center items-center">

            <div className="space-x-4">
                <div className='w-10 md:w-20'>
                    <img className='w-full' src={navLogo} alt="" />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl">Espresso Emporium</h1>
            </div>

        </div>
    );
};

export default Navbar;