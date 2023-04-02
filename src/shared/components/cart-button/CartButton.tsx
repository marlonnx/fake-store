import { IconButton, Tag } from '@hope-ui/solid';
import { Component, Show } from 'solid-js';
import { userCart } from '../../contexts/cart_context';

const CartButton: Component = () => {
  const cart = userCart();
  return (
    <div class="relative inline-block">
      <IconButton
        variant="outline"
        aria-label="Search"
        icon={<i class="fa-solid fa-cart-shopping"></i>}
      />
      <Show  when={cart.count() > 0}>
        <Tag size="sm" variant="solid" class="absolute top-[-5px] right-[-10px] z-10">
          {cart.count()}
        </Tag>
      </Show>
    </div>
  );
};

export default CartButton;
