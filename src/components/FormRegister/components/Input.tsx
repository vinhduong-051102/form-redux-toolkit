import * as React from 'react';


interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  action?(e: React.ChangeEvent<HTMLInputElement>): void;
  value: string;

}

const Input = (props: InputProps) => {
  const { type = 'text', placeholder = '', name = '', action = () => {}, className = 'form-control', value } = props;
  return (
    <div className="mb-3 mt-3">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={action}
        name={name}
        value={value}
      />
    </div>
  );
};


export default Input;

