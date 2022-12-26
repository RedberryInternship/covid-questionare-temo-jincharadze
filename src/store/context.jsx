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
  had_vaccine: '',
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
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

  const checkVaccinate = useWatch({
    control: form.control,
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
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

  const nonFormalMeetings = useWatch({
    control: form.control,
    name: 'non_formal_meetings',
  });

  const workFromOffice = useWatch({
    control: form.control,
    name: 'number_of_days_from_office',
  });

  const meetingInLive = useWatch({
    control: form.control,
    name: 'what_about_meetings_in_live',
  });

  const tellUsOpinion = useWatch({
    control: form.control,
    name: 'tell_us_your_opinion_about_us',
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
        checkVaccinate,
        lastName,
        nonFormalMeetings,
        workFromOffice,
        meetingInLive,
        tellUsOpinion,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};
