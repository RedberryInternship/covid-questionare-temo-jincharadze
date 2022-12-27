import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = () => {
  const { getQuery } = useQuery('page');
  const { form } = useContext(FormDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getQuery || getQuery < 1 || getQuery > 4 || isNaN(getQuery)) {
      navigate('/', { replace: true });
    }
  }, [getQuery]);

  return { getQuery, form };
};

export default useForm;
