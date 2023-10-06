import { Link } from 'react-router-dom';
import userPic from '../../assets/images/user.png';

const NavBar = () => {
          
    const navLinks = <>
        <Link to="/"><li><a className='text-lg font-poppins text-[#706F6F] '>Home</a></li></Link>
        <Link to="/about"><li><a className='text-lg font-poppins text-[#706F6F] '>About</a></li></Link>
        <Link to="/career"><li><a className='text-lg font-poppins text-[#706F6F] '>Career</a></li></Link>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">
                    <div><img className='h-10 w-10 object-contain' src={userPic} alt="" /></div>
                    <a className="btn rounded-none bg-[#403F3F] text-xl text-white font-poppins font-semibold border-2  hover:border-[#403F3F] hover:bg-transparent hover:text-[#403F3F]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;