import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const usePersonalInfo = () => {
  const { firstName, lastName, email, setFormInputs, formInputs } =
    useContext(FormDataContext);

  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const navigate = useNavigate();

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem('items'));

    if (getItems !== null) {
      localStorage.setItem(
        'items',
        JSON.stringify({
          ...getItems,
          first_name: firstName,
          email: email,
          last_name: lastName,
        })
      );
      return setFormInputs((prev) => {
        return {
          ...prev,
          first_name: firstName,
          email: email,
          last_name: lastName,
        };
      });
    }
    localStorage.setItem('items', JSON.stringify(formInputs));
  }, [firstName, lastName, email]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=2');
  };

  return {
    handleClick,
    register,
    formState: { isValid, errors },
  };
};
export default usePersonalInfo;
