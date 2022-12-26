import { Input, Arrow, Message, usePersonalInfo } from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import { pageOneImg } from '@/assets';

const PersonalInfo = (props) => {
  const {
    handleClick,
    register,
    firstNameError,
    lastNameError,
    emailNameError,
    formState: { errors },
  } = usePersonalInfo();

  return (
    <>
      <div className={props.className}>
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
                  message:
                    'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
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
                  message:
                    'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
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

          <div className='sticky flex justify-center overflow-hidden'>
            <div className='h-[4.7rem]  bg-custom-lime-300 top-52 z-10 animate-yellow'></div>
            <img src={pageOneImg} className=' w-[850px] z-20' />
          </div>
        </div>
        <Arrow
          stroke={
            firstNameError || lastNameError || emailNameError
              ? '#8D8D8D'
              : '#232323'
          }
          nextClick={handleClick}
          disabled={firstNameError || lastNameError || emailNameError}
        />
      </div>
    </>
  );
};

export default PersonalInfo;
