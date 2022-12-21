import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePersonalInfo = (getItems, getValues) => {
  const { setFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (getItems) {
      setFormData((prev) => {
        return { ...prev, ...getItems };
      });
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = getValues(name);

    localStorage.setItem(
      'items',
      JSON.stringify({ ...getItems, [name]: value })
    );
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, pageOneIsValid: true };
    });
    navigate('/questionnaire?page=2');
  };

  return { handleChange, handleClick };
};
export default usePersonalInfo;
