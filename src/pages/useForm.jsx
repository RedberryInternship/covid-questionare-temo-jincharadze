import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = () => {
  const { getQuery } = useQuery('page');
  const navigate = useNavigate();
  const {
    setFormState,
    getItems,
    formState,
    formState: { isValid },
  } = useContext(FormDataContext);

  useEffect(() => {
    if (getQuery === '2' && !isValid) {
    }
    if (getItems) {
      return setFormState((prev) => {
        return { ...prev, ...getItems };
      });
    }

    localStorage.setItem('items', JSON.stringify({ ...formState }));
  }, []);

  return { getQuery };
};

export default useForm;
