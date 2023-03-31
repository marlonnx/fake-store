import {
  Button,
  createDisclosure,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@hope-ui/solid';
import { createForm, email, Field, Form, required } from '@modular-forms/solid';
import { useNavigate } from '@solidjs/router';
import { Component, createSignal, Show } from 'solid-js';
import { useAuth } from '../../../../shared/auth/auth_context';
import Logo from '../../components/Logo';
import { loginWithEmailAndPassword } from '../../services/login_service';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [errorMsg, setErrorMsg] = createSignal('');
  const { isOpen, onOpen, onClose } = createDisclosure();
  const auth = useAuth();
  const loginForm = createForm<LoginForm>();
  const loginHandler = async (form: LoginForm, event: SubmitEvent) => {
    if (loading()) {
      return;
    }
    setLoading(true);
    try {
      await auth?.login(form.email, form.password);
    } catch (error) {
      setErrorMsg(`${error}`);
      onOpen();
      console.log(error);
    }
    setLoading(false);
  };

  const navigate = useNavigate();
  return (
    <div class="h-full w-full pt-64 items-center flex flex-col">
      <Logo />
      <Form of={loginForm} onSubmit={loginHandler} class="mt-5 w-1/5">
        <VStack gap="$5">
          <Field
            of={loginForm}
            name="email"
            validate={[required('Campo obrigatório.'), email('Email inválido')]}
          >
            {(field) => (
              <div class="w-full">
                <Input
                  invalid={field.error !== null && field.error !== ''}
                  {...field.props}
                  type="email"
                  placeholder="Email"
                />
                <Show when={field.error}>
                  <Text size="xs" color="red" class="mt-1">
                    {field.error}
                  </Text>
                </Show>
              </div>
            )}
          </Field>
          <Field of={loginForm} name="password" validate={[required('Campo obrigatório.')]}>
            {(field) => (
              <div class="w-full">
                <Input
                  invalid={field.error !== null && field.error !== ''}
                  {...field.props}
                  type="password"
                  placeholder="Senha"
                />
                <Show when={field.error}>
                  <Text size="xs" color="red" class="mt-1">
                    {field.error}
                  </Text>
                </Show>
              </div>
            )}
          </Field>
          <Button type="submit" width="$full" loading={loading()}>
            ENTRAR
          </Button>
        </VStack>
      </Form>
      <Modal centered opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Ops!</ModalHeader>
          <ModalBody>
            <p>{errorMsg()}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default LoginPage;
