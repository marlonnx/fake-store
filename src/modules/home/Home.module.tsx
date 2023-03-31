import { ProductsProvider } from './contexts/product_context';
import HomePage from './Home';

function HomeModule() {
  return (
    <>
      <ProductsProvider>
        <HomePage />
      </ProductsProvider>
    </>
  );
}

export default HomeModule;
