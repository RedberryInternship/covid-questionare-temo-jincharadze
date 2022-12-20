import LeftArrow from '@/components/LeftArrow';
import RightArrow from '@/components/RightArrow';
import Button from '@/components/form/button/Button';
import useQuery from '@/hooks/useQuery';

const Arrow = (props) => {
  const { getQuery } = useQuery(props.query);

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
