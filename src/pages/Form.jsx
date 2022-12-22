import { PersonalInfo, Card, CovidInfo } from '@/components';
import { useForm } from '@/pages';

const Form = () => {
  const { getQuery } = useForm();

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
