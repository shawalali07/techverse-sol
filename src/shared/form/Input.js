import React from 'react';

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value && props.value}
        className={`form-control form-control-lg ${
          props.styleClass && props.styleClass
        }`}
        autoComplete={props.autoComplete && props.autoComplete}
        name={props.name && props.name}
        placeholder={props.placeholder && props.placeholder}
        onChange={props.onChange}
        max={props.max && props.max}
        min={props.min && props.min}
        maxlength={props.maxlength && props.maxlength}
        onKeyDown={props.onKeyDown && props.onKeyDown}
      />
      {props.error && (
        <p
          className='error-class-form'
          style={{ color: 'red', padding: '2px' }}
        >
          {props.error}
        </p>
      )}
    </>
  );
};

export default Input;
