import {
  createContext,
  createResource,
  JSX,
  Resource,
  createSignal,
  useContext,
  Accessor,
  createEffect,
} from 'solid-js';
import { Product } from '../../../shared/models/product';
import { getAllProducts } from '../services/products_service';

export interface ProductsContextProps {
  children: JSX.Element;
}

export interface ProductsContextModel {
  products: Resource<Product[]>;
  page: Accessor<number>;
  isLastPage: Accessor<boolean>;
  actions: {
    nextProducts(): void;
    prevProducts(): void;
    goToPage(index: number): void;
  };
}

export const ProductContext = createContext<ProductsContextModel>();

export function ProductsProvider(props: ProductsContextProps) {
  const limit = 15;
  const [offset, setOffset] = createSignal(limit);
  const [isLastPage, setIsLastPage] = createSignal(false);
  const [page, setPage] = createSignal(1);
  const [products, { refetch }] = createResource(() => getAllProducts({ offset: offset(), limit }));
  const productsQuantity = () => products()?.length ?? 0;
  createEffect(() => {
    if (productsQuantity() !== limit && productsQuantity() > 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  });
  createEffect(() => {
    console.log(`Aqui2 - ${page()} `);
  
  });

  const value: ProductsContextModel = {
    products,
    page,
    isLastPage,
    actions: {
      nextProducts() {
        setOffset((prev) => prev + limit);
        setPage((prev) => prev + 1);
        refetch();
      },
      prevProducts() {
        setOffset((prev) => prev - limit);
        setPage((prev) => prev - 1);
        refetch();
      },
      goToPage(index: number) {
        setOffset(limit * index);
        setPage(index);
        refetch();
      },
    },
  };

  return <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>;
}
export function useProducts() {
  return useContext(ProductContext);
}
