import starOne from '@/assets/images/star-one.png';
import starTwo from '@/assets/images/star-two.png';
import heart from '@/assets/images/heart.png';

const Success = () => {
  return (
    <div>
      <div className='absolute bg-custom-neutral-800 h-screen w-screen justify-center items-center flex animate-heartBg overflow-hidden'>
        <img
          src={heart}
          alt='heart image'
          className='w-20 h-20 animate-heartScale'
        />
      </div>
      <div className='bg-custom-neutral-800 w-screen h-screen flex flex-col justify-center items-center  z-20 sticky'>
        <div>
          <div className='relative'>
            <img
              src={starOne}
              className='relative opacity-0 animate-starOne'
              alt='star image'
            />
          </div>
          <div className='max-w-[27.8125rem]'>
            <h2 className='h-[4.8rem] flex items-center all-small-caps tracking-widest font-bold text-[4rem] text-white relative opacity-0 animate-successText'>
              მადლობა
            </h2>
          </div>
          <div className='flex justify-end'>
            <img
              src={starTwo}
              className='relative opacity-0 animate-starTwo'
              alt='star image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
