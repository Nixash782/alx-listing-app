import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-medium transition';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
