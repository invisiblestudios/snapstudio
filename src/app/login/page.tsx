import Login from '@/components/auth/login';
import { APP_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Login',
  description: `Login to ${APP_NAME}`,
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
