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
  
  
  
  
  
  
  
  ],
},


];

const router = new VueRouter({
  routes,
 
});

export default router;
