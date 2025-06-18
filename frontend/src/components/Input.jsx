import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  icon = null, // 👈 icon prop (React element)
}) => {
  return (
    <div style={styles.container}>
      {label && (
        <label htmlFor={name} style={styles.label}>
          {label}
        </label>
      )}

      <div style={styles.inputWrapper}>
        {icon && <div style={styles.icon}>{icon}</div>}
        <input
          style={{
            ...styles.input,
            ...(icon ? styles.inputWithIcon : {}),
            ...(error ? styles.inputError : {}),
          }}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>

      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    color: '#000',
    fontSize: '15px',
    fontWeight: '500',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#000',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1.5px solid #ccc',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'inherit',
  },
  inputWithIcon: {
    paddingLeft: '38px',
  },
  inputError: {
    borderColor: '#e63946',
    backgroundColor: '#fff0f0',
  },
  error: {
    marginTop: '5px',
    fontSize: '13px',
    color: '#e63946',
  },
};

export default Input;
