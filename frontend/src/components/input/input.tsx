import React from 'react';
import './input.css';
import { Flex } from '../flex';
import { Text } from '../text';

type InputProps = {
  label: string,
  type: React.HTMLInputTypeAttribute | undefined,
  value: string | number | readonly string[] | undefined,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
};

export const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return <Flex direction='column' alignItems='stretch'>
    <Text size='small' >{label}</Text>
    <input
      className='input'
      type={type}
      value={value}
      onChange={onChange}
    />
  </Flex>;
};

export default Input;