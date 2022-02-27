import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { cart } = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
