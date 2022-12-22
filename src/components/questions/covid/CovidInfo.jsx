import { Arrow, Input, Message, useCovidInfo } from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import pageTwoImg from '@/assets/images/page-two.png';

const CovidInfo = () => {
  const {
    formState,
    register,
    nextClick,
    checkRadio,
    setValue,
    backClick,
    formData: { errors, isValid },
  } = useCovidInfo();

  console.log(isValid);

  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h2 className='mt-[2.6rem] mb-4 text-[22px] font-bold text-custom-neutral-800'>
            გაქვს გადატანილი Covid-19?*
          </h2>
          <div className='ml-5'>
            <Input
              type='radio'
              label='კი'
              name='had_covid'
              checked={formState.had_covid === 'yes'}
              register={register('had_covid', {
                required: { value: true },
              })}
              value='yes'
            />

            <Input
              type='radio'
              label='არა'
              name='had_covid'
              checked={formState.had_covid === 'no'}
              register={register('had_covid', {
                onChange: () => setValue('had_antibody_test', ''),
                required: { value: true },
              })}
              value='no'
            />
            <Input
              type='radio'
              label='ახლა არა'
              name='had_covid'
              checked={formState.had_covid === 'have_right_now'}
              register={register('had_covid', { required: { value: true } })}
              value='have_right_now'
            />
          </div>
          {checkRadio[0] === 'yes' && (
            <div className='mt-11'>
              <h2 className='mb-4 text-[22px] font-bold text-custom-neutral-800'>
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </h2>

              <div className='ml-5'>
                <Input
                  type='radio'
                  label='კი'
                  name='had_antibody_test'
                  checked={formState.had_antibody_test === 'true'}
                  register={register('had_antibody_test', {
                    required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                  })}
                  value='true'
                />
                <Input
                  type='radio'
                  label='არა'
                  name='had_antibody_test'
                  checked={formState.had_antibody_test === 'false'}
                  register={register('had_antibody_test', {
                    required: { value: true },
                  })}
                  value='false'
                />
              </div>
            </div>
          )}
          {checkRadio[1] === 'true' && checkRadio[0] === 'yes' && (
            <div className='mt-12'>
              <h2 className='mb-4 text-[22px] font-bold text-custom-neutral-800 flex flex-col'>
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი{' '}
                <span>რიცხვი და ანტისხეულების რაოდენობა*</span>
              </h2>

              <div className='max-w-lg w-full mt-7 ml-5'>
                <Input
                  type='text'
                  name='antibodies.test_date'
                  placeholder='რიცხვი'
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  register={register('antibodies.test_date', {
                    required: { value: false },
                    pattern: {
                      value:
                        /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
                      message: 'გთხოვთ შეიყვანოთ სწორი თარიღი',
                    },
                  })}
                />

                <ErrorMessage
                  name='antibodies.test_date'
                  errors={errors}
                  render={({ message }) => <Message message={message} />}
                />

                <div className='mt-6'>
                  <Input
                    type='text'
                    name='antibodies.number'
                    placeholder='ანტისხეულების რაოდენობა'
                    register={register('antibodies.number', {
                      required: { value: false },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: 'გთხოვთ შეიყვანოთ ციფრი',
                      },
                    })}
                  />
                </div>

                <ErrorMessage
                  name='antibodies.number'
                  errors={errors}
                  render={({ message }) => <Message message={message} />}
                />
              </div>
            </div>
          )}
          {checkRadio[1] === 'false' && (
            <div className='mt-11 '>
              <h2 className='mb-4 text-[22px] font-bold text-custom-neutral-800 flex flex-col'>
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი)
                <span>როდის გქონდა Covid-19*</span>
              </h2>
              <div className='ml-5'>
                <Input
                  type='text'
                  name='covid_sickness_date'
                  placeholder='დდ/თთ/წწ'
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  register={register('covid_sickness_date', {
                    required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
                    pattern: {
                      value:
                        /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
                      message: 'გთხოვთ შეიყვანოთ სწორი თარიღი',
                    },
                  })}
                />

                <ErrorMessage
                  name='covid_sickness_date'
                  errors={errors}
                  render={({ message }) => <Message message={message} />}
                />
              </div>
            </div>
          )}
        </div>
        <img src={pageTwoImg} className='w-[53rem]' />
      </div>
      <div>
        <Arrow
          nextClick={nextClick}
          backClick={backClick}
          disabled={!isValid}
        />
      </div>
    </>
  );
};

export default CovidInfo;
