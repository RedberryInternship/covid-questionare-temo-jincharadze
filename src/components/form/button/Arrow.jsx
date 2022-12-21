import { LeftArrow, RightArrow } from '@/components';
import { Button } from '@/components';
import { useQuery } from '@/hooks';

const Arrow = (props) => {
  const { getQuery } = useQuery('page');

  return (
    <div className='flex justify-center'>
      <div className='mr-[7.3125rem]'>
        {getQuery > 1 && (
          <Button onClick={props.backClick}>
            <LeftArrow />
          </Button>
        )}
      </div>
      <div>
        <Button disabled={props.disabled} onClick={props.nextClick}>
          <RightArrow />
        </Button>
      </div>
    </div>
  );
};

export default Arrow;
