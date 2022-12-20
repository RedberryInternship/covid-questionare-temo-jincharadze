import { useForm } from 'react-hook-form';
import Input from '@/components/form/input/Input';
import pageOneImg from '@/assets/images/page-one.png';
import { useContext, useEffect } from 'react';
import { FormDataContext } from '@/store/context';

const PageOne = () => {
  const getItems = JSON.parse(localStorage.getItem('items'));

  const { setFormData } = useContext(FormDataContext);
  const { register, getValues } = useForm({
    mode: 'onChange',
    defaultValues: getItems,
  });

  useEffect(() => {
    if (getItems) {
      setFormData((prev) => {
        return { ...prev, ...getItems };
      });
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = getValues(name);

    localStorage.setItem(
      'items',
      JSON.stringify({ ...getItems, [name]: value })
    );
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='w-full mt-[2.6rem]'>
        <Input
          type='text'
          name='first_name'
          placeholder='იოსებ'
          label='სახელი*'
          register={register('first_name', {
            onChange: handleChange,
            required: true,
            minLength: 2,
            maxLength: 255,
            pattern: /^[ა-ჰ]+$/,
          })}
        />

        <Input
          type='text'
          name='last_name'
          placeholder='ჯუღაშვილი'
          label='გვარი*'
          className='mt-[3rem]'
          register={register('last_name', {
            onChange: handleChange,
            required: true,
            minLength: 2,
            maxLength: 255,
            pattern: /^[ა-ჰ]+$/,
          })}
        />

        <Input
          type='email'
          name='email'
          placeholder='fbi@redberry.ge'
          label='მეილი*'
          className='mt-[3rem]'
          register={register('email', {
            onChange: handleChange,
            required: true,
            pattern: /^[\w.+-]+@redberry\.ge$/,
          })}
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
  );
};

export default PageOne;
