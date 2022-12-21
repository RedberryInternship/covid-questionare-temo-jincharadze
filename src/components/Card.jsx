import redberryLogo from '@/assets/images/redberry.png';
import { useQuery } from '@/hooks';

const Card = (props) => {
  const { getQuery } = useQuery('page');
  return (
    <div className='max-w-[95rem] w-full mx-auto mt-24'>
      <div className='flex justify-between items-end'>
        <img src={redberryLogo} className='h-6' />
        <div className='font-anonymous text-[2.5rem] h-11'>{getQuery}/4</div>
      </div>
      <div className='border-b-2 border-custom-neutral-800 w-full mt-6'></div>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
