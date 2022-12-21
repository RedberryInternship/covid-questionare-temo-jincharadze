import { Input, Arrow, Message, usePersonalInfo } from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import pageOneImg from '@/assets/images/page-one.png';
import { useContext, useEffect } from 'react';
import { FormDataContext } from '@/store';

const PersonalInfo = () => {
  const {
    register,
    firstName,
    lastName,
    email,
    setFormState,
    formData: { errors, isValid },
  } = useContext(FormDataContext);

  const { handleClick } = usePersonalInfo(
    firstName,
    email,
    lastName,
    setFormState
  );

  return (
    <>
      <div className='flex justify-between'>
        <div className='max-w-lg w-full mt-[2.6rem]'>
          <Input
            type='text'
            name='first_name'
            placeholder='იოსებ'
            label='სახელი*'
            register={register('first_name', {
              required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
              minLength: {
                value: 2,
                message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
              maxLength: {
                value: 255,
                message:
                  'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
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
      <Arrow nextClick={handleClick} disabled={!isValid} />
    </>
  );
};

export default PersonalInfo;
