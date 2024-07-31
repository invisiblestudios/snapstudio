import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import LoginForm from './components/login-form';
import Link from 'next/link';

const Login = () => {
  return (
    <section className='bg-gray-100 h-screen flex flex-col items-center justify-center'>
      <div className='max-w-4xl mx-auto lg:w-full w-11/12 bg-white rounded-xl p-4 md:p-0'>
        <div className='flex justify-between items-center max-md:flex-wrap'>
          <div className='p-1 md:basis-2/5 hidden md:block'>
            <Image
              src='/assets/images/auth/login-illustration.jpg'
              alt='Login'
              width={510}
              height={679}
            />
          </div>

          <div className='md:basis-3/5 flex flex-col items-center justify-center'>
            <div>
              <div className='flex items-center justify-center gap-1 mb-5'>
                <Image
                  src='/assets/logos/logo.svg'
                  alt={APP_NAME}
                  width={28}
                  height={36}
                  className='w-6 h-6 object-contain'
                />

                <h1 className='font-black'>{APP_NAME}</h1>
              </div>

              <h2 className='font-bold text-center text-xl md:text-2xl mb-2'>
                Welcome back to {APP_NAME}
              </h2>

              <p className='text-gray-500 text-center mb-6'>
                The best way to enhance your Photos with AI
              </p>

              <LoginForm />

              <p className='text-sm text-gray-500 mt-4 text-center'>
                Don{"'"}t have an account?{' '}
                <Link href='/signup' className='text-primary'>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
