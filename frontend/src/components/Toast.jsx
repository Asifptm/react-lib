import React from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'react-feather';
import { useAlert } from '../hooks/useAlert'; 

const Toast = () => {
  const { alert } = useAlert();
  if (!alert.show) return null;

  const icons = {
    success: <CheckCircle size={18} color="#2ecc71" />,
    error: <XCircle size={18} color="#e74c3c" />,
    info: <Info size={18} color="#3498db" />,
    warning: <AlertTriangle size={18} color="#f39c12" />,
  };

  const bgColors = {
    success: '#e6fff2',
    error: '#ffe6e6',
    info: '#ebf5ff',
    warning: '#fff8e6',
  };

  const borderColors = {
    success: '#2ecc71',
    error: '#e74c3c',
    info: '#3498db',
    warning: '#f39c12',
  };

  return (
    <div style={{
      ...styles.toast,
      backgroundColor: bgColors[alert.type],
      borderLeft: `5px solid ${borderColors[alert.type]}`,
    }}>
      <div style={styles.icon}>{icons[alert.type]}</div>
      <span style={styles.message}>{alert.message}</span>
    </div>
  );
};

const styles = {
  toast: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 18px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    minWidth: '260px',
    transition: 'opacity 0.3s ease',
  },
  icon: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  message: {
    color: '#000',
    fontSize: '14px',
    flex: 1,
  },
};

export default Toast;
