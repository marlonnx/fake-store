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
      <img class="rounded-xl md:active-image"  src={activeImage() ?? props.images[0]} />
      
      <div class="flex-1 ">
        <SimpleGrid minChildWidth="120px" gap={'$10'} class="mt-5">
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
