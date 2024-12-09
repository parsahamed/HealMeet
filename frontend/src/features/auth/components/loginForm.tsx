import React, { useState } from 'react';
import { login } from '../authService';
import { Button, Flex, Form, Input, Text } from '../../../components';

export const LoginForm: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { accessToken } = await login(emailOrPhone, password);

      // Store JWT token and redirect
      localStorage.setItem('access_token', accessToken);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction='column' gap={16} alignItems='stretch'>
        <Input label='Email or Phone'
          type='text'
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <Input label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Text size='small'>{error}</Text>}
        <Button type="submit">Login</Button>
      </Flex>
    </Form>
  );
};

export default LoginForm;