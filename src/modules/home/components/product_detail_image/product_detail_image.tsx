import { SimpleGrid } from '@hope-ui/solid';
import { Component, createSignal, For } from 'solid-js';
import './product_detail_image.css';

interface IProductDetailImage {
  images: string[];
}

const ProductDetailImage: Component<IProductDetailImage> = (props) => {
  const [activeImage, setActiveImage] = createSignal<string>();

  return (
    <>
      <img class="rounded-xl min-h-0 md:min-h-[550px]"  src={activeImage() ?? props.images[0]} />
      
      <div class="flex-1 ">
        <SimpleGrid minChildWidth="60px" gap={'$10'} class="mt-5">
          <For each={props.images}>
            {(item, index) => (
              <img
                class="rounded-lg cursor-pointer"
                src={item}
                onClick={() => setActiveImage(item)}
              />
            )}
          </For>
        </SimpleGrid>
      </div>
    </>
  );
};

export default ProductDetailImage;
