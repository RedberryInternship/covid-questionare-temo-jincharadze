import {
  PersonalInfo,
  Card,
  CovidInfo,
  VaccinationInfo,
  PolicyInfo,
} from '@/components';
import { useForm } from '@/pages';
import { FormProvider } from 'react-hook-form';

const Form = () => {
  const { form, getQuery } = useForm();

  return (
    <Card>
      <FormProvider {...form}>
        <form>
          <PersonalInfo className={getQuery !== '1' ? 'hidden' : ''} />
          <CovidInfo className={getQuery !== '2' ? 'hidden' : ''} />
          <VaccinationInfo className={getQuery !== '3' ? 'hidden' : ''} />
          <PolicyInfo className={getQuery !== '4' ? 'hidden' : ''} />
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
