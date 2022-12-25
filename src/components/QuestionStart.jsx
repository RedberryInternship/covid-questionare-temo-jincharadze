import { Link } from 'react-router-dom';
import { mainLogo } from '@/assets';

const QuestionStart = () => {
  return (
    <div className='overflow-hidden h-screen flex items-center flex-col justify-center'>
      <img
        src={mainLogo}
        alt='logo'
        className='animate-shrink w-[100px] relative z-10'
      />
      <div className='overflow-hidden mt-[6.3rem] h-[4.5rem] w-96'>
        <Link
          to='/questionnaire?page=1'
          className='text-custom-neutral-800 tracking-wider font-bold text-3xl flex flex-col items-center all-small-caps opacity-0 animate-text text-shadow cursor-pointer'
        >
          კითხვარის <span>დაწყება</span>
        </Link>
      </div>
    </div>
  );
};

export default QuestionStart;
