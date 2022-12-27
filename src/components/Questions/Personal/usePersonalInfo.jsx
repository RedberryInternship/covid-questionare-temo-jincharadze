import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const usePersonalInfo = () => {
  const { firstName, lastName, email, setFormInputs, formInputs } =
    useContext(FormDataContext);

  const {
    register,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useFormContext();

  const navigate = useNavigate();

  const { getQuery } = useQuery('page');

  const firstNameError = errors.first_name || !getValues('first_name');
  const lastNameError = errors.last_name || !getValues('last_name');
  const emailNameError = errors.email || !getValues('email');

  useEffect(() => {
    if (getQuery === '1') {
      const getItems = JSON.parse(localStorage.getItem('items'));

      if (getItems !== null) {
        localStorage.setItem(
          'items',
          JSON.stringify({
            ...getItems,
            first_name: firstName,
            email: getValues('email') ? email.trim() : email,
            last_name: lastName,
          })
        );
        return setFormInputs((prev) => {
          return {
            ...getItems,
            first_name: firstName,
            email: getValues('email') ? email.trim() : email,
            last_name: lastName,
          };
        });
      }
      return localStorage.setItem('items', JSON.stringify(formInputs));
    }
  }, [firstName, lastName, email]);

  const handleClick = async (e) => {
    e.preventDefault();
    const checkInput = await trigger(['first_name', 'last_name', 'email']);

    if (checkInput) {
      return navigate('/questionnaire?page=2');
    }
  };

  return {
    handleClick,
    register,
    firstNameError,
    lastNameError,
    emailNameError,
    formState: { isValid, errors },
  };
};
export default usePersonalInfo;
