import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useCovidInfo = () => {
  const {
    formState,
    setFormState,
    register,
    checkRadio,
    formData: { errors, isValid },
  } = useContext(FormDataContext);

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
    setFormState((prev) => {
      return {
        ...prev,
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
    formState,
    register,
    nextClick,
    checkRadio,
    backClick,
    formData: { errors, isValid },
  };
};

export default useCovidInfo;
