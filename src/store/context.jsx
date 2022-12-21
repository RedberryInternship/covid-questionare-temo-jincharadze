import { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const defaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  pageOneIsValid: false,
};

export const FormDataProvider = (props) => {
  const [formData, setFormData] = useState(defaultValues);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {props.children}
    </FormDataContext.Provider>
  );
};
