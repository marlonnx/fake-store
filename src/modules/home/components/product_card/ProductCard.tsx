import { Button, Center } from '@hope-ui/solid';
import { A, useNavigate } from '@solidjs/router';
import { Accessor, Component } from 'solid-js';
import { Product } from '../../../../shared/models/product';
import { userCart } from '../../../../shared/contexts/cart_context';
interface IProductCard {
  product: Product;
}

const ProductCard: Component<IProductCard> = (props) => {
  const cart = userCart();
  return (
    <>
      <div class="sm:w-full max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <A href={`/product-detail/${props.product.id}`} class="p-3">
          <Center>
            <img class="rounded-lg" src={props.product.images[0]} alt="product image" />
          </Center>
        </A>
        <div class="px-5 pb-5 mt-auto">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.product.title}
            </h5>
          </a>

          <div class="flex items-center justify-between mt-3">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${props.product.price}
            </span>
            <Button size="sm" onClick={() => cart.add({ product: props.product, quantity: 0 })}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
