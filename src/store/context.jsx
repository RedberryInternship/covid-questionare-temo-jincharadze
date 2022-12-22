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
  const [formState, setFormState] = useState(initialState);
  const getItems = JSON.parse(localStorage.getItem('items'));
  const {
    register,
    control,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: getItems,
  });

  const checkRadio = useWatch({
    control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.test_date',
      'antibodies.number',
      'covid_sickness_date',
    ],
  });

  const firstName = useWatch({
    control,
    name: 'first_name',
  });

  const lastName = useWatch({
    control,
    name: 'last_name',
  });

  const email = useWatch({
    control,
    name: 'email',
  });

  return (
    <FormDataContext.Provider
      value={{
        formState,
        setFormState,
        register,
        getItems,
        checkRadio,
        firstName,
        email,
        lastName,
        setValue,
        getValues,
        formData: { errors, isValid },
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};
