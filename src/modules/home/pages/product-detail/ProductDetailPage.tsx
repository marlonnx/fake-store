import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Center,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Spinner,
} from '@hope-ui/solid';
import { useParams } from '@solidjs/router';
import { Component, createResource, createSignal, For, Suspense } from 'solid-js';
import { getProduct } from '../../services/products_service';

const ProductDetailPage: Component = () => {
  const params = useParams();
  const [product] = createResource(() => parseInt(params.id), getProduct);
  const [activeImage, setActiveImage] = createSignal<string>();
  return (
    <>
      <div class="flex flex-col h-full px-5 lg:px-0">
        <Suspense
          fallback={
            <div class=" flex-1 flex">
              <Spinner class="m-auto" />
            </div>
          }
        >
          <Breadcrumb class="my-10">
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/categories/${product()?.category.id}`}>
                {product()?.category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div class="flex flex-col lg:flex-row h-full">
            <div class="flex-1 flex flex-col mb-5 lg:mb-0 lg:mr-20 ">
              <img
                class="rounded-xl"
                src={activeImage() ?? product()?.images[0]}
              />

              <div class="flex-1 ">
                <SimpleGrid minChildWidth="120px" gap={'$10'} class="mt-5">
                  <For each={product()?.images}>
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
            </div>
            <div class="flex-1 ">
              <div class="flex flex-col" style={{ height: '550px' }}>
                <p class="text-3xl font-bold">{product()?.title}</p>
                <p class="font-bold text-gray-400 mt-5 ">{product()?.description}</p>
                <Divider class="my-10" />
                <p class="text-3xl font-bold">
                  {`$${product()?.price} or ${
                    product()?.price ? '$' + (product()!.price / 6).toFixed(2) + '/month' : ''
                  }`}
                </p>
                <p class="font-bold text-gray-400 mt-5 ">
                  Suggested payment with 6 months special financing
                </p>
                <Divider class="my-10" />

                <div class="flex">
                  <div class="w-36  py-5 flex justify-between  rounded-md">
                    <IconButton
                      variant="outline"
                      aria-label="Search"
                      icon={<i class="fa-solid fa-plus"></i>}
                    />
                    <Center>
                      <span>1</span>
                    </Center>
                    <IconButton
                      variant="outline"
                      aria-label="Search"
                      icon={<i class="fa-solid fa-minus"></i>}
                    />
                  </div>
                  <div class="flex flex-col justify-center mx-10 font-bold">
                    <p>Only 12 Items Left</p>
                    <p>Don't miss it</p>
                  </div>
                </div>
                <div class="flex mt-auto ">
                  <Button w={'$48'} class="mr-5">
                    Buy Now
                  </Button>
                  <Button w={'$48'} variant="outline">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div class="flex-1 flex flex-col py-4 border rounded-lg h-40 mt-5">
                <div class="flex-1 flex items-center ml-5">
                  <i class="fa-solid fa-truck mr-4"></i>
                  <div>
                    <span class="font-bold">Free Delivery</span>
                    <p class="underline">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <Divider class='my-2' />

                <div class="flex-1 flex items-center ml-5">
                  <i class="fa-solid fa-clipboard mr-4"></i>
                  <div>
                    <span class="font-bold">Return Delivery</span>
                    <p class="">
                      Free 30 days Delivery returns.<span class="underline ml-1">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default ProductDetailPage;
