import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useCovidInfo = () => {
  const { formInputs, setFormInputs, checkRadio, firstName, lastName, email } =
    useContext(FormDataContext);
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useFormContext();

  const navigate = useNavigate();

  useEffect(() => {
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

  const nextClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=3');
  };

  const backClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=1');
  };

  return {
    getValues,
    register,
    nextClick,
    formInputs,
    checkRadio,
    backClick,
    setValue,
    formState: { errors, isValid },
  };
};

export default useCovidInfo;
