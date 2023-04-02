import { Component, Show } from 'solid-js';

import { Route, Routes, useLocation } from '@solidjs/router';
import Access from './modules/access/Access';
import Login from './modules/access/pages/login/Login';
import { AuthProvider } from './shared/auth/auth_context';
import Header from './shared/components/header/Header';
import { ProductsProvider } from './modules/home/contexts/product_context';
import HomeModule from './modules/home/Home.module';
import ProductDetailPage from './modules/home/pages/product-detail/ProductDetailPage';
import { CartProvider } from './shared/contexts/cart_context';

const App: Component = () => {
  const location = useLocation();

  return (
    <div class="mx-5">
      <AuthProvider>
        <CartProvider>
          <Show when={!location.pathname.includes('/access')}>
            <Header />
          </Show>
          <Routes>
            <Route path="/">
              <Route path="/" component={HomeModule} />
              <Route path="/product-detail/:id" component={ProductDetailPage} />
            </Route>
            <Route path="/access">
              <Route path="/" component={Access} />
              <Route path="/login" component={Login} />
              <Route path="/create-account" component={Access} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
