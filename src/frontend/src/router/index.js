import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Post from '@/components/Post';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
    },
  ],
});

export default router;