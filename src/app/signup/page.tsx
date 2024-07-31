import SignUp from '@/components/auth/signup';
import { APP_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Create a Free Account',
  description: `Create a Free Account on ${APP_NAME}`,
};

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
