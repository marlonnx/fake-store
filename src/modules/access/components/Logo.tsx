import type { Component } from 'solid-js';

const Logo: Component = (props) => {
  const url =
    'https://img.freepik.com/vetores-premium/logotipo-colorido-do-mercado-com-gradiente_23-2148472540.jpg?w=2000';
  return <img src={url} class="w-1/5" {...props} />;
};

export default Logo;