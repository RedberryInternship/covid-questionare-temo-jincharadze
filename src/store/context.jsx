import { createContext, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export const FormDataContext = createContext();

export const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  had_antibody_test: '',
  covid_sickness_date: '',
  antibodies: {
    test_date: '',
    number: '',
  },
};

export const FormDataProvider = (props) => {
  const [formInputs, setFormInputs] = useState(initialState);
  const getItems = JSON.parse(localStorage.getItem('items'));
  const form = useForm({
    mode: 'all',
    defaultValues: getItems,
  });

  const checkRadio = useWatch({
    control: form.control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.test_date',
      'antibodies.number',
      'covid_sickness_date',
    ],
  });

  const firstName = useWatch({
    control: form.control,
    name: 'first_name',
  });

  const lastName = useWatch({
    control: form.control,
    name: 'last_name',
  });

  const email = useWatch({
    control: form.control,
    name: 'email',
  });

  return (
    <FormDataContext.Provider
      value={{
        form,
        formInputs,
        setFormInputs,
        checkRadio,
        firstName,
        email,
        lastName,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};
