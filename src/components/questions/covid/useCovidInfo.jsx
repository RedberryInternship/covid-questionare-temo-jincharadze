import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useCovidInfo = () => {
  const { setFormInputs, checkRadio } = useContext(FormDataContext);
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors, isValid },
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
    const getItems = JSON.parse(localStorage.getItem('items'));

    localStorage.setItem(
      'items',
      JSON.stringify({
        ...getItems,
        had_covid: checkRadio[0],
        had_antibody_test: checkRadio[1],
        covid_sickness_date: checkRadio[4],
        antibodies: {
          test_date: checkRadio[2],
          number: checkRadio[3],
        },
      })
    );
    setFormInputs(() => {
      return {
        ...getValues(),
        had_covid: checkRadio[0],
        had_antibody_test: checkRadio[1],
        covid_sickness_date: checkRadio[4],
        antibodies: {
          test_date: checkRadio[2],
          number: checkRadio[3],
        },
      };
    });
  }, [
    checkRadio[0],
    checkRadio[1],
    checkRadio[2],
    checkRadio[3],
    checkRadio[4],
  ]);

  const nextClick = async (e) => {
    e.preventDefault();
    const checkInput = await trigger([
      'had_covid',
      'had_antibody_test',
      'covid_sickness_date',
      'antibodies.test_date',
      'antibodies.number',
      'covid_sickness_date',
    ]);
    if (checkInput) {
      return navigate('/questionnaire?page=3');
    }
  };

  const backClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=1');
  };

  return {
    getValues,
    register,
    nextClick,
    checkRadio,
    backClick,
    setValue,
    trigger,
    formState: { errors, isValid },
  };
};

export default useCovidInfo;
