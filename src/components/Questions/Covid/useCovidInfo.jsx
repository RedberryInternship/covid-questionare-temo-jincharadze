import { useQuery } from '@/hooks';
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
  const { getQuery } = useQuery('page');

  useEffect(() => {
    if (getQuery === '2') {
      const getItems = JSON.parse(localStorage.getItem('items'));

      const checkInputs = async () => {
        const data = await trigger(['first_name', 'last_name', 'email']);
        if (!data) {
          return navigate('/questionnaire?page=1');
        }
      };

      checkInputs();

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
      return setFormInputs(() => {
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
    }
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
