import axios from 'axios';

const sendForm = async (data) => {
  const response = await axios.post('https://your-server.com/api/send-form', data);
  if (response.status === 200) {
    return true;
  }
  return false;
};

export default sendForm;