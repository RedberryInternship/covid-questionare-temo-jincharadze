import {
  Input,
  Message,
  usePolicyInfo,
  TextArea,
  Arrow,
  Button,
} from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import { bike, heart } from '@/assets';

const PolicyInfo = (props) => {
  const {
    register,
    getValues,
    backClick,
    handleClick,
    formState: { errors },
  } = usePolicyInfo();

  return (
    <>
      <div className={props.className}>
        <div className='flex justify-between'>
          <div className='mt-11'>
            <h2 className='flex flex-col  font-normal text-md text-custom-neutral-800'>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის <br />
              თითოეული წევრია. გარემო, რომელსაც ჩვენი <br /> თანამშრომლები
              ქმნით, ბევრისთვის არის და ყოფილა <br /> წლების განმავლობაში
              მიზნებისთვის ერთად ბრძოლის <br /> მიზეზი, ბევრისთვის კი — ჩვენთან
              გადმოსვლის.
              <span className='mt-7'>
                პანდემიის პერიოდში ერთმანეთსაც იშვიათად <br />
                ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც <br />
                გაიშვიათდა.
              </span>
            </h2>

            <div className='mt-11'>
              <h2 className='mb-4 text-md font-bold text-custom-neutral-800'>
                რა სიხშირით შეიძლება გვქონდეს საერთო <br /> არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა <br />
                სურვილისამებრ ჩაერთვება?*
              </h2>
              <div className='ml-5'>
                <Input
                  id='twice_a_week'
                  type='radio'
                  label='კვირაში ორჯერ'
                  name='non_formal_meetings'
                  checked={getValues('non_formal_meetings') === 'twice_a_week'}
                  register={register('non_formal_meetings', {
                    required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                  })}
                  value='twice_a_week'
                />

                <Input
                  id='once_a_week'
                  type='radio'
                  label='კვირაში ერთხელ'
                  name='non_formal_meetings'
                  checked={getValues('non_formal_meetings') === 'once_a_week'}
                  register={register('non_formal_meetings', {
                    required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                  })}
                  value='once_a_week'
                />
                <Input
                  id='once_in_a_two_weeks'
                  type='radio'
                  label='ორ კვირაში ერთხელ'
                  name='non_formal_meetings'
                  checked={
                    getValues('non_formal_meetings') === 'once_in_a_two_weeks'
                  }
                  register={register('non_formal_meetings', {
                    required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                  })}
                  value='once_in_a_two_weeks'
                />
                <Input
                  id='once_in_a_month'
                  type='radio'
                  label='თვეში ერთხელ'
                  name='non_formal_meetings'
                  checked={
                    getValues('non_formal_meetings') === 'once_in_a_month'
                  }
                  register={register('non_formal_meetings', {
                    required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                  })}
                  value='once_in_a_month'
                />

                <ErrorMessage
                  name='non_formal_meetings'
                  errors={errors}
                  render={({ message }) => <Message message={message} />}
                />
              </div>

              <div className='mt-11'>
                <h2 className='mb-4 text-md font-bold text-custom-neutral-800'>
                  კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />
                  მუშაობას?*
                </h2>
                <div className='ml-5'>
                  <Input
                    id='0'
                    type='radio'
                    label='0'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '0'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='0'
                  />
                  <Input
                    id='1'
                    type='radio'
                    label='1'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '1'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='1'
                  />
                  <Input
                    id='2'
                    type='radio'
                    label='2'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '2'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='2'
                  />
                  <Input
                    id='3'
                    type='radio'
                    label='3'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '3'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='3'
                  />
                  <Input
                    id='4'
                    type='radio'
                    label='4'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '4'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='4'
                  />
                  <Input
                    id='5'
                    type='radio'
                    label='5'
                    name='number_of_days_from_office'
                    checked={getValues('number_of_days_from_office') === '5'}
                    register={register('number_of_days_from_office', {
                      required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                    })}
                    value='5'
                  />

                  <ErrorMessage
                    name='number_of_days_from_office'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
              </div>

              <div className='mt-12'>
                <h2 className='mb-4 text-md font-bold text-custom-neutral-800'>
                  რას ფიქრობ ფიზიკურ შეკრებებზე?
                </h2>
                <TextArea
                  name='what_about_meetings_in_live'
                  register={register('what_about_meetings_in_live', {
                    pattern: {
                      value: /^[ა-ჰ0-9?:!@#$*&()`.+,/"-\s]*$/,
                      message: 'გთხოვთ შეავსოთ ქართულად',
                    },
                  })}
                />
                <div className='mt-2 h-6'>
                  <ErrorMessage
                    name='what_about_meetings_in_live'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
              </div>

              <div className='mt-10'>
                <h2 className='mb-4 text-md font-bold text-custom-neutral-800'>
                  რას ფიქრობ არსებულ გარემოზე: <br />
                  რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                </h2>

                <TextArea
                  name='tell_us_your_opinion_about_us'
                  register={register('tell_us_your_opinion_about_us', {
                    pattern: {
                      value: /^[ა-ჰ0-9?:!@#$*&()`.+,/"-\s]*$/,
                      message: 'გთხოვთ შეავსოთ ქართულად',
                    },
                  })}
                />
                <div className='mt-2 h-6'>
                  <ErrorMessage
                    name='tell_us_your_opinion_about_us'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
              </div>
            </div>
            <div className='flex max-w-[38.9rem] w-full justify-end'>
              <Button
                onClick={handleClick}
                className='bg-custom-cyan-700 pointer w-[11.25rem] h-14 all-small-caps rounded-[2.625rem] text-white font-bold text-2xl mt-[4.5rem]'
              >
                დასრულება
              </Button>
            </div>
          </div>
          <div className='fixed right-0 flex justify-center overflow-hidden'>
            <div className='z-10 animate-heart'>
              <img src={heart} alt='heart image' />
            </div>
            <img
              src={bike}
              alt='bike image'
              className='z-20 h-[43.8rem] mt-[4.5rem]'
            />
          </div>
        </div>
        <div className='mt-[4.6rem]'>
          <Arrow backClick={backClick} />
        </div>
      </div>
    </>
  );
};

export default PolicyInfo;
