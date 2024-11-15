import moment from 'moment';
import logoImg from '../../assets/logo.png';

const Header = () => {
    const date = moment().format("dddd, MMMM D, YYYY");
    const [day, month, dayOfMonth, year] = date.split(" ");

    return (
        <div className='mt-8'>
            <img className='mx-auto' src={logoImg} alt={`${logoImg} image`} />
            <p className='text-lg text-[#706F6F] text-center mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-center font-medium mt-2'>{day} <span className='text-[#706F6F]'>{month} {dayOfMonth} {year}</span></p>
        </div>
    );
};

export default Header;