import redberryLogo from '@/assets/images/redberry.png';
import LeftArrow from '@/components/form/button/LeftArrow';
import RightArrow from '@/components/form/button/RightArrow';

const Card = (props) => {
  return (
    <div className='max-w-[95rem] w-full mx-auto mt-24'>
      <div className='flex justify-between items-end'>
        <img src={redberryLogo} className='h-6' />
        <div className='font-anonymous text-[2.5rem] h-11'>1/4</div>
      </div>
      <div className='border-b-2 border-custom-neutral-800 w-full mt-6'></div>
      <div>{props.children}</div>

      <div className='flex justify-center'>
        <div className='mr-[7.3125rem]'>
          <LeftArrow />
        </div>
        <div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Card;
