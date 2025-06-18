
import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
  });

  const triggerAlert = ({ message, type = 'success', duration = 3000 }) => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: '', type: 'success' });
    }, duration);
  };

  return (
    <AlertContext.Provider value={{ alert, triggerAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
