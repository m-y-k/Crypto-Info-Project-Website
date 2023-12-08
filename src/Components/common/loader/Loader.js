import  React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./style.css"

function useInterval(callback, delay) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
}

export default function LoaderDisplay() {

  const [dots, setDots] = useState(' . . .');

  function animateLoadingText() {
    if (dots === ' . . .') {
      setDots('');
    } else {
      setDots((prevDots) => prevDots + ' .');
    }
  }

  useInterval(animateLoadingText, 1000);


 
    

    
     
    
  
  return (
    <div className='loader-container'>
      
      
     
      <span className='loader'></span>
     
     
      
    </div>
  );
}