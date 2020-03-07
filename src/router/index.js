import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '*',
  redirect: '/',
},
{
  path: '/',
  component: Home,
  children: [{
    path: '',
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: 'product',
    component: () => import('@/components/Product.vue'),
  },
  {
    path: 'product/:productId',
    component: () => import('@/components/ProductItem.vue'),
  },
  {
    path: 'cart',
    component: () => import('@/components/Cart.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/CartForm.vue'),
      },
      {
        path: 'checkout',
        component: () => import('@/components/Checkout.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('@/components/CheckoutOrder.vue'),
      },
    ],
  },
  
  
  ],
},


];

const router = new VueRouter({
  routes,
  // 這樣也可以在切換路由時，將畫面移至上方
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});

export default router;
