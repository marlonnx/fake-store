import { Button } from '@hope-ui/solid';
import { useNavigate } from '@solidjs/router';
import type { Component } from 'solid-js';
import './Access.css';
import Logo from './components/Logo';
const AccessPage: Component = () => {

  const navigate = useNavigate();
  return (
    <div class="h-full w-full pt-64  items-center flex flex-col">
      <Logo />
      <Button class="w-1/5 h-24 my-5" onClick={() => navigate('/access/login')}>
        ENTRAR NA CONTA
      </Button>
      <Button variant="outline" class="w-1/5 h-24 mb-5" onClick={() => navigate('/access/create-account')}>
        CRIAR UMA CONTA
      </Button>
      <Button variant="ghost" class="w-1/5 h-24" onClick={() => navigate('/')}>
        Continuar sem cadastro
      </Button>
    </div>
  );
};
export default AccessPage;
