import Home from '@/modules/home/homepage';

const AppHomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='rounded-xl shadow-sm p-12 font-bold text-5xl text-center'>
        <Home />
      </div>
    </div>
  );
};

export default AppHomePage;
