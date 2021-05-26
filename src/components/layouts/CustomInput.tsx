import React from 'react';
type PageProps = { onchange: () => void; name: string; value: string };
const CustomInput = ({ onchange, name, value }: PageProps) => {
  return <input onChange={onchange} name={name} value={value} />;
};

export default CustomInput;
