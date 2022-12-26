import { useQuery } from '@/hooks';
import { sendFormData } from '@/services';
import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const usePolicyInfo = () => {
  const {
    setFormInputs,
    nonFormalMeetings,
    tellUsOpinion,
    workFromOffice,
    meetingInLive,
    formInputs,
  } = useContext(FormDataContext);
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useFormContext();

  const navigate = useNavigate();

  const { getQuery } = useQuery('page');

  useEffect(() => {
    if (getQuery === '4') {
      const checkInputs = async () => {
        const checkCovidForm = await trigger([
          'had_covid',
          'had_antibody_test',
          'antibodies.test_date',
          'antibodies.number',
          'covid_sickness_date',
        ]);

        const checkPersonalForm = await trigger([
          'first_name',
          'last_name',
          'email',
        ]);

        const checkVaccinateForm = await trigger([
          'had_vaccine',
          'vaccination_stage',
          'i_am_waiting',
        ]);

        if (!checkPersonalForm) {
          return navigate('/questionnaire?page=1');
        }

        if (!checkCovidForm) {
          return navigate('/questionnaire?page=2');
        }

        if (!checkVaccinateForm) {
          return navigate('/questionnaire?page=3');
        }
      };

      checkInputs();
      const getItems = JSON.parse(localStorage.getItem('items'));

      localStorage.setItem(
        'items',
        JSON.stringify({
          ...getItems,
          non_formal_meetings: nonFormalMeetings,
          number_of_days_from_office: workFromOffice,
          what_about_meetings_in_live: getValues('what_about_meetings_in_live')
            ? meetingInLive.trim()
            : meetingInLive,
          tell_us_your_opinion_about_us: getValues(
            'tell_us_your_opinion_about_us'
          )
            ? tellUsOpinion.trim()
            : tellUsOpinion,
        })
      );
      return setFormInputs(() => {
        return {
          ...getValues(),
          non_formal_meetings: nonFormalMeetings,
          number_of_days_from_office: workFromOffice,
          what_about_meetings_in_live: getValues('what_about_meetings_in_live')
            ? meetingInLive.trim()
            : meetingInLive,
          tell_us_your_opinion_about_us: getValues(
            'tell_us_your_opinion_about_us'
          )
            ? tellUsOpinion.trim()
            : tellUsOpinion,
        };
      });
    }
  }, [nonFormalMeetings, workFromOffice, meetingInLive, tellUsOpinion]);

  const backClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=3');
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const transformFormData = {
      ...formInputs,
      had_antibody_test:
        getValues('had_antibody_test') === 'true'
          ? true
          : getValues('had_antibody_test') === 'false'
          ? false
          : '',
      had_vaccine:
        getValues('had_vaccine') === 'true'
          ? true
          : getValues('had_vaccine') === 'false'
          ? false
          : '',
      number_of_days_from_office: Number(
        getValues('number_of_days_from_office')
      ),
      antibodies: {
        test_date: getValues('antibodies.test_date'),
        number: getValues('antibodies.number')
          ? Number(getValues('antibodies.number'))
          : '',
      },
    };

    const antibodies = Object.fromEntries(
      Object.entries(transformFormData.antibodies).filter(([e, v]) => v !== '')
    );
    const filteredData = Object.fromEntries(
      Object.entries(transformFormData).filter(([e, v]) => v !== '')
    );

    if (!isValid) {
      return;
    }

    const formData = { ...filteredData, antibodies: antibodies };

    const sendData = await sendFormData(formData);

    if (sendData.statusText === 'Created') {
      localStorage.removeItem('items');
      navigate('/success', { replace: true });
    }
  };
  return {
    backClick,
    getValues,
    setValue,
    register,
    handleClick,
    formState: { errors },
  };
};

export default usePolicyInfo;
