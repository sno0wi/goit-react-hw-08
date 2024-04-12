import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import { apiLoginUser } from '../redux/auth/operations.js';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = formData => {
    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
