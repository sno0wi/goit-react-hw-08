import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsSignedIn } from '../../redux/auth/selectors.js';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
