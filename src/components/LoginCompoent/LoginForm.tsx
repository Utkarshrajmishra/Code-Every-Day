import { Dialog, TextField, Button, Flex, Text } from '@radix-ui/themes';
import authService from '../../FIrebaseServices/Auth';


const LoginForm = () => {



   
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="350px">
        <Dialog.Title align="center">Log in</Dialog.Title>

        <Flex direction="column" gap="5" p="4">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
              type="email"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>

            <TextField.Root
              defaultValue="freja@example.com"
              placeholder="Enter your email"
              type="password"
            />
            <Text color="blue" size="2">
              Forgot Password?
            </Text>
          </label>
          <label>
            <Flex direction="column" gap="1">
              <Button>Sign in</Button>
            </Flex>
          </label>
          <Text size="2" align="center">
            Not a member?{'  '}
            <Text color="blue">Signup now</Text>
          </Text>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default LoginForm;
