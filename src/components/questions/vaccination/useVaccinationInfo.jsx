import { useQuery } from '@/hooks';
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
  const { getQuery } = useQuery('page');

  useEffect(() => {
    if (getQuery === '3') {
      const checkInputs = async () => {
        const data = await trigger([
          'had_covid',
          'had_antibody_test',
          'antibodies.test_date',
          'antibodies.number',
          'covid_sickness_date',
        ]);

        const checkFirstPage = await trigger([
          'first_name',
          'last_name',
          'email',
        ]);

        if (!checkFirstPage) {
          return navigate('/questionnaire?page=1');
        }

        if (!data) {
          return navigate('/questionnaire?page=2');
        }
      };

      checkInputs();

      localStorage.setItem(
        'items',
        JSON.stringify({
          ...getItems,
          had_vaccine: checkVaccinate[0],
          vaccination_stage: checkVaccinate[1],
          i_am_waiting: checkVaccinate[2],
        })
      );

      return setFormInputs(() => {
        return {
          ...getValues(),
          had_vaccine: checkVaccinate[0],
          vaccination_stage: checkVaccinate[1],
          i_am_waiting: checkVaccinate[2],
        };
      });
    }
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
