import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext, useEffect } from 'react';

const useForm = () => {
  const { getQuery } = useQuery('page');
  const { setFormState, getItems, formState } = useContext(FormDataContext);

  useEffect(() => {
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
