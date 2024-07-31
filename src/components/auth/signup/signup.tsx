import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import SignUpForm from './components/signup-form';
import Link from 'next/link';

const SignUp = () => {
  return (
    <section className='bg-gray-100 h-screen flex flex-col items-center justify-center'>
      <div className='max-w-4xl mx-auto lg:w-full w-11/12 bg-white rounded-xl p-4 md:p-0'>
        <div className='flex justify-between items-center max-md:flex-wrap'>
          <div className='md:basis-3/5 flex flex-col items-center justify-center md:px-8 py-4'>
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
                Create a Free Account
              </h2>

              <p className='text-gray-500 text-center mb-6'>
                Enhance your Photos with AI for Free
              </p>

              <SignUpForm />

              <p className='text-sm text-gray-500 mt-4 text-center'>
                Already have an account?{' '}
                <Link href='/login' className='text-primary'>
                  Login
                </Link>
              </p>
            </div>
          </div>

          <div className='p-1 md:basis-2/5 hidden md:block self-stretch'>
            <Image
              src='/assets/images/auth/signup-illustration.jpg'
              alt='Signup'
              width={510}
              height={679}
              className='object-cover w-full h-full rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
