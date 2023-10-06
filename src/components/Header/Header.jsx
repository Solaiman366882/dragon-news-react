import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className='text-center pt-8'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-4 mb-2 font-poppins text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className=' text-xl font-poppins text-[#403F3F] font-medium'>
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
            </p>
        </header>
    );
};

export default Header;