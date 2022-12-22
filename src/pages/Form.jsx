import { PersonalInfo, Card, CovidInfo } from '@/components';
import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext } from 'react';
import { useForm } from '@/pages';

const Form = () => {
  const { getQuery } = useQuery('page');
  const {
    setFormState,
    getItems,
    formState,
    getValues,
    formData: { isValid },
  } = useContext(FormDataContext);

  console.log(getValues());

  useForm(setFormState, getItems, formState);

  return (
    <Card>
      <form>
        {getQuery === '1' && <PersonalInfo />}
        {getQuery === '2' && <CovidInfo />}
      </form>
    </Card>
  );
};

export default Form;
