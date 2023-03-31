import {
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  CircularProgressIndicator,
  SimpleGrid,
  VStack,
} from '@hope-ui/solid';
import { Component, For, Show, Suspense } from 'solid-js';
import Banner from '../../assets/images/banner.jpg';
import HomePagePagination from './components/pagination/home_page_pagination';
import ProductCard from './components/product_card/ProductCard';
import { useProducts } from './contexts/product_context';
const HomePage: Component = (props) => {
  const context = useProducts();
  return (
    <>
      <img src={Banner} class="rounded-b-lg" />
      <VStack gap="$10" class="mb-10">
        <Center>
          <SimpleGrid columns={{ '@initial': 1, '@md': 3, '@lg': 5 }} gap="$5" class="my-5">
            <For each={context?.products()}>
              {(item, index) => {
                return <ProductCard product={item} />;
              }}
            </For>
          </SimpleGrid>
        </Center>
        <Show when={context?.products.loading}>
          <div class="h-56">
            <CircularProgress indeterminate>
              <CircularProgressIndicator />
            </CircularProgress>
          </div>
        </Show>
        <Show when={!context?.products.loading}>
          <HomePagePagination />
        </Show>
        <br />
      </VStack>
    </>
  );
};

export default HomePage;
