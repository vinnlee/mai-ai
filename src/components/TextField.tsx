import React from 'react';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classes?: string;
  helperTxt?: string;
  label: string;
  name: string;
  placeholder?: string;
  fieldClasses?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  classes,
  helperTxt,
  label,
  name,
  placeholder = ' ',
  fieldClasses = ' ',
  ...rest
}) => {
  return (
    <div className={`input-wrapper flex flex-col mb-2 ${classes}`}>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        className={`input-field ${fieldClasses}`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />

      {helperTxt && <p className="helper">{helperTxt}</p>}
    </div>
  );
};

export default TextField;
