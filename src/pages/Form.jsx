import { PersonalInfo, Card, CovidInfo, VaccinationInfo } from '@/components';
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
          {getQuery === '3' && <VaccinationInfo />}
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
