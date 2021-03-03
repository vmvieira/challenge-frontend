import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  font-family: 'Open Sans';
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error ? <div>{props.error}</div> : null}
    </div>
  );
}

export default TextInput;
