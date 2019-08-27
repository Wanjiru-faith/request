import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import showBlog from '../src/components/showBlog.vue';
import addBlog from '../src/components/addBlog.vue';
import listBlogs from '../src/components/listBlogs.vue';
import singleBlog from '../src/components/singleBlog.vue';

Vue.use(Router)

export default new Router({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/home', 
      name: 'home',
     component: Home 
    },
    {path:'/', component:showBlog},
    {path:'/add', component:addBlog},
    {path:'/list', component:listBlogs},
    {path:'/blog/:id', component:singleBlog}
  ]
});
