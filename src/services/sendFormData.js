import instance from './axios';
const sendUserData = (data) => {
  return instance.post('/', data);
};
export default sendUserData;
