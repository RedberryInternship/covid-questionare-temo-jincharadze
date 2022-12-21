import { PersonalInfo, Card } from '@/components';
import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
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

  console.log(formData);

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
