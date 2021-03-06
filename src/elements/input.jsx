import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { type, placeholder, onChange, label, label_style, onKeyPress, value } =
    props;
  const id = Date.now();

  return (
    <>
      <LabelBox htmlFor={id} style={label_style}>
        {label}
      </LabelBox>
      <InputBox
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></InputBox>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  label_bg: 'transparent',
  label_alignX: 'left',
};

const InputBox = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  ${(props) => (props.type === 'file' ? `cursor:pointer;` : '')}
`;

const LabelBox = styled.label`
  width: 100%;
`;

export default Input;
