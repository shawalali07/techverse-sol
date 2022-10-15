import { toast } from 'react-hot-toast';

const fail = (errorMessage) => {
  toast.error(errorMessage ? errorMessage : 'Something went wrong..');
};

export default fail;
