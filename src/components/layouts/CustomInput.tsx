import React from 'react';
type PageProps = {
  onchange: () => void;
  name: string;
  value: string;
  maxlength?: number;
  placeholder?: string;
  type: string;
  max?: number;
};
const CustomInput = ({ onchange, name, value, maxlength, placeholder, type, max }: PageProps) => {
  return (
    <input
      max={max}
      type={type}
      placeholder={placeholder}
      maxLength={maxlength}
      onChange={onchange}
      name={name}
      value={value}
    />
  );
};

export default CustomInput;
