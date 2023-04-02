import { JSX, createContext, useContext } from 'solid-js';
import { Product } from '../models/product';
import { createStore } from 'solid-js/store';

interface CartProviderProps {
  children: JSX.Element;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextModel {
  items: CartItem[];
  count: () => number;
  add: (item: CartItem) => void;
  remove: (item: CartItem) => void;
}

const CartContext = createContext<CartContextModel>();

export function CartProvider(props: CartProviderProps) {
  const [items, setItems] = createStore<CartItem[]>([]);

  const value: CartContextModel = {
    items,
    count: () => items.length,
    add: (item: CartItem) => {
      const x = items;
      const index = x.indexOf(item);
      if (index != -1) {
        x[index].quantity++;
        setItems(items);
      } else {
        setItems([...items, item]);
      }
    },
    remove: (item: CartItem) => {
      setItems(items.filter((value, index) => item.product.id != value.product.id));
    },
  };

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
}

export function userCart() {
  return useContext(CartContext)!;
}
