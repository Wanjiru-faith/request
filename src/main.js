import Vue from 'vue'
import App from './App.vue'
// what came by default: 
import VueRouter from './router'
import store from './store'
import './registerServiceWorker'

 
import VueResource from 'vue-resource'
//import VueRouter from 'vue-router' 

Vue.use(VueResource);
// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes:VueRouter

// });


/*filters globally
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();

}); 
Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';

});

//Custom Directive
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8)

  }

});*/
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWdth = "1200px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth ="500px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }

})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router:VueRouter
}).$mount('#app') 
