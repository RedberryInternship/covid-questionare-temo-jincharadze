import {
  Arrow,
  Input,
  Message,
  NotVaccinated,
  useVaccinationInfo,
  Vaccinated,
} from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import { doctor, star } from '@/assets';

const VaccinationInfo = (props) => {
  const {
    register,
    getValues,
    setValue,
    nextClick,
    backClick,
    checkVaccinate,
    formState: { errors },
  } = useVaccinationInfo();

  return (
    <>
      <div className={props.className}>
        <div className='flex justify-between'>
          <div>
            <h2 className='mt-24 mb-4 text-md font-bold text-custom-neutral-800'>
              უკვე აცრილი ხარ?*
            </h2>

            <div className='ml-5'>
              <Input
                id='had_vaccine_true'
                type='radio'
                label='კი'
                name='had_vaccine'
                value='true'
                checked={getValues('had_vaccine') === 'true'}
                register={register('had_vaccine', {
                  onChange: () => {
                    setValue('i_am_waiting', '');
                    setValue('vaccination_stage', '');
                  },
                  required: { value: true, message: 'გთხოვთ შეავსოთ ველი' },
                })}
              />
              <Input
                id='had_vaccine_false'
                type='radio'
                label='არა'
                name='had_vaccine'
                value='false'
                checked={getValues('had_vaccine') === 'false'}
                register={register('had_vaccine', {
                  required: { value: true, message: 'გთხოვთ აირჩიოთ ველი' },
                })}
              />

              <ErrorMessage
                name='had_vaccine'
                errors={errors}
                render={({ message }) => <Message message={message} />}
              />
            </div>

            {checkVaccinate[0] === 'true' && (
              <div>
                <h2 className='mt-[2.6rem] mb-4 text-md font-bold text-custom-neutral-800'>
                  აირჩიე რა ეტაპზე ხარ*
                </h2>
                <div className='ml-5'>
                  <Input
                    id='first_dosage_and_registered_on_the_second'
                    type='radio'
                    label='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
                    name='vaccination_stage'
                    value='first_dosage_and_registered_on_the_second'
                    checked={
                      getValues('vaccination_stage') ===
                      'first_dosage_and_registered_on_the_second'
                    }
                    register={register('vaccination_stage', {
                      required: {
                        value: true,
                        message: 'გთხოვთ აირჩიოთ ველი',
                      },
                    })}
                  />
                  <Input
                    id='fully_vaccinated'
                    type='radio'
                    label='სრულად აცრილი ვარ'
                    name='vaccination_stage'
                    value='fully_vaccinated'
                    checked={
                      getValues('vaccination_stage') === 'fully_vaccinated'
                    }
                    register={register('vaccination_stage', {
                      required: {
                        value: true,
                        message: 'გთხოვთ აირჩიოთ ველი',
                      },
                    })}
                  />

                  <Input
                    id='first_dosage_and_not_registered_yet'
                    type='radio'
                    label='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
                    name='vaccination_stage'
                    value='first_dosage_and_not_registered_yet'
                    checked={
                      getValues('vaccination_stage') ===
                      'first_dosage_and_not_registered_yet'
                    }
                    register={register('vaccination_stage')}
                  />

                  <ErrorMessage
                    name='vaccination_stage'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />

                  {checkVaccinate[1] ===
                    'first_dosage_and_not_registered_yet' && <Vaccinated />}
                </div>
              </div>
            )}

            {checkVaccinate[0] === 'false' && (
              <div>
                <h2 className='mt-[2.6rem] mb-4 text-md font-bold text-custom-neutral-800'>
                  რას ელოდები?*
                </h2>
                <div className='ml-5'>
                  <Input
                    id='registered_and_waiting'
                    type='radio'
                    label='დარეგისტრირებული ვარ და ველოდები რიცხვს'
                    name='i_am_waiting'
                    value='registered_and_waiting'
                    checked={
                      getValues('i_am_waiting') === 'registered_and_waiting'
                    }
                    register={register('i_am_waiting', {
                      required: {
                        value: true,
                        message: 'გთხოვთ აირჩიოთ ველი',
                      },
                    })}
                  />
                  <Input
                    id='not_planning'
                    type='radio'
                    label='არ ვგეგმავ'
                    name='i_am_waiting'
                    value='not_planning'
                    checked={getValues('i_am_waiting') === 'not_planning'}
                    register={register('i_am_waiting', {
                      required: {
                        value: true,
                        message: 'გთხოვთ აირჩიოთ ველი',
                      },
                    })}
                  />

                  <Input
                    id='had_covid_and_planning_to_be_vaccinated'
                    type='radio'
                    label='გადატანილი მაქვს და ვგეგმავ აცრას'
                    name='i_am_waiting'
                    value='had_covid_and_planning_to_be_vaccinated'
                    checked={
                      getValues('i_am_waiting') ===
                      'had_covid_and_planning_to_be_vaccinated'
                    }
                    register={register('i_am_waiting')}
                  />

                  <ErrorMessage
                    name='i_am_waiting'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />

                  {checkVaccinate[2] === 'not_planning' && (
                    <div className='mt-10'>
                      <a
                        href='https://booking.moh.gov.ge/'
                        target='_blank'
                        className='ml-11 text-custom-cyan-600 text-xl font-normal'
                      >
                        👉https://booking.moh.gov.ge/
                      </a>
                    </div>
                  )}

                  {checkVaccinate[2] ===
                    'had_covid_and_planning_to_be_vaccinated' && (
                    <NotVaccinated />
                  )}
                </div>
              </div>
            )}
          </div>
          <div className='sticky flex justify-center overflow-hidden mt-20'>
            <div className='z-10  animate-star'>
              <img src={star} alt='star image' />
            </div>
            <img
              src={doctor}
              alt='doctor image'
              className='mt-12 z-20 relative'
            />
          </div>
        </div>
        <Arrow
          backClick={backClick}
          nextClick={nextClick}
          stroke={
            checkVaccinate[0] === 'true' && checkVaccinate[1]
              ? '#232323'
              : checkVaccinate[0] === 'false' && checkVaccinate[2]
              ? '#232323'
              : '#8D8D8D'
          }
        />
      </div>
    </>
  );
};

export default VaccinationInfo;
