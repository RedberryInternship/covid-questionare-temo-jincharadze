import { useForm } from 'react-hook-form';
import Input from '@/components/form/input/Input';
import pageOneImg from '@/assets/images/page-one.png';
import { useContext, useEffect } from 'react';
import { FormDataContext } from '@/store/context';
import { ErrorMessage } from '@hookform/error-message';
import Message from '@/components/form/error/Message';

const PageOne = () => {
  const getItems = JSON.parse(localStorage.getItem('items'));

  const { setFormData } = useContext(FormDataContext);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
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
      <div className='max-w-lg w-full mt-[2.6rem]'>
        <Input
          type='text'
          name='first_name'
          placeholder='იოსებ'
          label='სახელი*'
          register={register('first_name', {
            onChange: handleChange,
            required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
            minLength: {
              value: 2,
              message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
            maxLength: {
              value: 255,
              message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
            },
            pattern: {
              value: /^[ა-ჰ]+$/,
              message: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
            },
          })}
        />

        <ErrorMessage
          name='first_name'
          errors={errors}
          render={({ message }) => <Message message={message} />}
        />

        <Input
          type='text'
          name='last_name'
          placeholder='ჯუღაშვილი'
          label='გვარი*'
          className='mt-[3rem]'
          register={register('last_name', {
            onChange: handleChange,
            required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
            minLength: {
              value: 2,
              message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
            maxLength: {
              value: 255,
              message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
            },
            pattern: {
              value: /^[ა-ჰ]+$/,
              message: 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
            },
          })}
        />

        <ErrorMessage
          name='last_name'
          errors={errors}
          render={({ message }) => <Message message={message} />}
        />

        <Input
          type='email'
          name='email'
          placeholder='fbi@redberry.ge'
          label='მეილი*'
          className='mt-[3rem]'
          register={register('email', {
            onChange: handleChange,
            required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
            pattern: {
              value: /^[\w.+-]+@redberry\.ge$/,
              message: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
            },
          })}
        />

        <ErrorMessage
          name='email'
          errors={errors}
          render={({ message }) => <Message message={message} />}
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
