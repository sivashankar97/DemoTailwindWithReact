
import React from 'react';

// interface to declare all our prop types

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string, // default, primary, info, success, warning, danger, dark
  size?: string, // sm, md, lg
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  ...args
}) => {
  return (
    <button
      className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button