import React, { useEffect,useState } from 'react'

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedDateTime = currentDateTime.toLocaleString(); 
  return (
    <div  className='fixed flex top-0 p-4 w-full bg-violet-500 text-white text-2xl font-bold border-blue-50 justify-between '>
      What you have to do today?
      <div className='text-xl'>{formattedDateTime}</div>
    </div>
  )
}

export default Header
