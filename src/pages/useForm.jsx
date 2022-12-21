import { useEffect } from 'react';

const useForm = (setFormState, getItems, formState) => {
  useEffect(() => {
    if (getItems) {
      return setFormState((prev) => {
        return { ...prev, ...getItems };
      });
    }

    localStorage.setItem('items', JSON.stringify({ ...formState }));
  }, []);
};

export default useForm;
