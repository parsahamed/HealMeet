import React from 'react';
import { LoginForm } from '../components';
import { Card, Flex, Text, ThemeToggle } from '../../../components';

export const LoginPage: React.FC = () => {
  return (
    <Flex style={{ height: '100vh' }}>
      <Card>
        <Flex direction='column' alignItems='stretch' gap={32} style={{ width: '500px' }}>
          <Text size='title' align='center'>Login To Heal Meet</Text>
          <LoginForm />
          <ThemeToggle />
        </Flex>
      </Card>

    </Flex>
  );
};

export default LoginPage;