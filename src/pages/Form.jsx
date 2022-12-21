import Card from '@/components/Card';
import PersonalInfo from '@/components/questions/PersonalInfo';
import useQuery from '@/hooks/useQuery';
import { FormDataContext } from '@/store/context';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { getQuery } = useQuery('page');
  const { formData } = useContext(FormDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (getQuery === '2' && !formData.pageOneIsValid) {
      navigate(-1);
    }
  }, []);

  return (
    <Card>
      <form>
        {getQuery === '1' && <PersonalInfo />}
        {getQuery === '2' && formData.pageOneIsValid && <p>Second Page</p>}
      </form>
    </Card>
  );
};

export default Form;
