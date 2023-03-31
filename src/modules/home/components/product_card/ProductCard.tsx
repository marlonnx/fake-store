import { Center } from '@hope-ui/solid';
import { A, useNavigate } from '@solidjs/router';
import { Accessor, Component } from 'solid-js';
import { Product } from '../../../../shared/models/product';
interface IProductCard {
  product: Product;
}

const ProductCard: Component<IProductCard> = (props) => {
  return (
    <>
      <div class="sm:w-full max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <A href={`/product-detail/${props.product.id}`}>
          <Center>
            <img class="p-8 rounded-t-lg h-60" src={props.product.images[0]} alt="product image" />
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
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
