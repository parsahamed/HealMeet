import React from 'react';
import { LoginForm } from '../components';
import { Card, Flex, LocalizationToggle, Text, ThemeToggle } from '../../../components';

export const LoginPage: React.FC = () => {
  return (
    <Flex style={{ height: '100vh' }}>
      <Card>
        <Flex direction='column' alignItems='stretch' gap={32} style={{ width: '500px' }}>
          <Text size='title' align='center'>login.title</Text>
          <LoginForm />
          <Flex direction='row' justifyContent='flex-end' gap={32}>
            <LocalizationToggle />
            <ThemeToggle />
          </Flex>
        </Flex>
      </Card>

    </Flex>
  );
};

export default LoginPage;