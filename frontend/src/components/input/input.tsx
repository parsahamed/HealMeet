import React from 'react';
import './input.css';
import { Flex } from '../flex';
import { Text } from '../text';

type InputProps = {
  label: string,
  type: React.HTMLInputTypeAttribute | undefined,
  value: string | number | readonly string[] | undefined,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  translate?: boolean;
};

export const Input: React.FC<InputProps> = ({ label, type, value, onChange, translate = true }) => {
  return <Flex direction='column' alignItems='stretch' gap={4}>
    <Text size='small' translate={translate} >{label}</Text>
    <input
      className='input'
      type={type}
      value={value}
      onChange={onChange}
    />
  </Flex>;
};

export default Input;