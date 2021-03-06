import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductsList from './components/ProductsList';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/checkout';
import E404 from './components/E404';

const routes = [
  {
    path: '', 
    redirect: {name: 'products'} 
  },
  {
    name: 'products',
    path: '/products', 
    component: ProductsList 
  },
  {
    path: '/products/:id', 
    component: Product 
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '*',
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});