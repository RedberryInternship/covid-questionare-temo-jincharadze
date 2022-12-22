import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePersonalInfo = () => {
  const {
    register,
    firstName,
    lastName,
    email,
    setFormState,
    formData: { errors, isValid },
  } = useContext(FormDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem('items'));

    localStorage.setItem(
      'items',
      JSON.stringify({
        ...getItems,
        first_name: firstName,
        email: email,
        last_name: lastName,
      })
    );
    setFormState((prev) => {
      return {
        ...prev,
        first_name: firstName,
        email: email,
        last_name: lastName,
      };
    });
  }, [firstName, lastName, email]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/questionnaire?page=2');
  };

  return { handleClick, register, formData: { isValid, errors } };
};
export default usePersonalInfo;
