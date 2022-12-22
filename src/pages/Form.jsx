import { PersonalInfo, Card, CovidInfo } from '@/components';
import { useForm } from '@/pages';
import { FormProvider } from 'react-hook-form';

const Form = () => {
  const { form, getQuery } = useForm();
  return (
    <Card>
      <FormProvider {...form}>
        <form>
          {getQuery === '1' && <PersonalInfo />}
          {getQuery === '2' && <CovidInfo />}
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
