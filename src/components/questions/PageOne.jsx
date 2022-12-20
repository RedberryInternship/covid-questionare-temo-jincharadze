import Input from '@/components/form/input/Input';
import pageOneImg from '@/assets/images/page-one.png';

const PageOne = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='w-full mt-[2.6rem]'>
          <Input
            type='text'
            name='first_name'
            placeholder='იოსებ'
            label='სახელი*'
          />

          <Input
            type='text'
            name='last_name'
            placeholder='ჯუღაშვილი'
            label='გვარი*'
            className='mt-[3rem]'
          />

          <Input
            type='email'
            name='email'
            placeholder='fbi@redberry.ge'
            label='მეილი*'
            className='mt-[3rem]'
          />

          <div className='mt-28'>
            <div className='border-[0.8px] w-[14.8rem] border-black'></div>
            <p className='mt-5 flex flex-col text-custom-zinc-600 text-base font-bold'>
              *-ით მონიშნული ველების შევსება <span>სავალდებულოა</span>
            </p>
          </div>
        </div>

        <img src={pageOneImg} className='h-[43.8rem]' />
      </div>
    </div>
  );
};

export default PageOne;
