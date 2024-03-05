import { useState, useEffect } from "react";

const useError = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {    
    if (errorMessage) {
      setIsActive(true);
      const timeout = setTimeout(() => {
        setErrorMessage('');
        setIsActive(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return {
    setErrorMessage,
    errorMessage,
    isActive,
  };
};

export default useError;
