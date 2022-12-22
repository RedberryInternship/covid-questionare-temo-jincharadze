import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useVaccinationInfo = () => {
  const getItems = JSON.parse(localStorage.getItem('items'));
  const { checkVaccinate, setFormInputs } = useContext(FormDataContext);
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !getValues('first_name') &&
      !getValues('last_name') &&
      !getValues('email')
    ) {
      return navigate('/questionnaire?page=1');
    }

    if (
      getValues('first_name') &&
      getValues('last_name') &&
      getValues('email')
    ) {
      if (!getValues('had_covid')) {
        return navigate('/questionnaire?page=2');
      }

      if (getValues('had_covid') === 'yes' && !getValues('had_antibody_test')) {
        return navigate('/questionnaire?page=2');
      }

      if (
        getValues('had_covid') === 'yes' &&
        getValues('had_antibody_test') === 'false' &&
        !getValues('covid_sickness_date')
      ) {
        return navigate('/questionnaire?page=2');
      }
    }

    localStorage.setItem(
      'items',
      JSON.stringify({
        ...getItems,
        had_vaccine: checkVaccinate[0],
        vaccination_stage: checkVaccinate[1],
        i_am_waiting: checkVaccinate[2],
      })
    );

    setFormInputs(() => {
      return {
        ...getValues(),
        had_vaccine: checkVaccinate[0],
        vaccination_stage: checkVaccinate[1],
        i_am_waiting: checkVaccinate[2],
      };
    });
  }, [checkVaccinate[0], checkVaccinate[1], checkVaccinate[2]]);

  const nextClick = async (e) => {
    e.preventDefault();
    const checkInput = await trigger([
      'had_vaccine',
      'vaccination_stage',
      'i_am_waiting',
    ]);
    if (checkInput) {
      return navigate('/questionnaire?page=4');
    }
  };

  const backClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=2');
  };

  return {
    register,
    setValue,
    getValues,
    checkVaccinate,
    nextClick,
    backClick,
    formState: { errors },
  };
};

export default useVaccinationInfo;
