import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the user navigates away
  }, [navigate]);
  
  return (
    <div className="w-screen flex flex-col items-center justify-center p-40">
      <div className="text-center w-screen">
        <p className="md:inline ml-2 sm: font-bold text-zinc-700 tracking-wider text-3xl sm:text-5xl">404</p>
        <h1 className="mt-4 pb-4 text-5xl font-semibold tracking-tight text-balance text-zinc-700 sm:text-7xl">Page not found</h1>
        <p className="text-lg font-medium px-9 text-pretty text-zinc-700 sm:text-xl/8">
          Oops! We couldn’t find the page you’re looking for.
          <br/> <span className='animate-pulse text-zinc-700'> We'll redirect you..</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;