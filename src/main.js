import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);  //vue resource is aplugin for Vue.js that provides services for making web requests and handle responses using a XMLHttpRequest or JSONP.
Vue.use(VueRouter);

//new instance of the router
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

Vue.config.productionTip = false


//filters : Registering filters globally
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase(); 
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});


//custom directives : Register custom directives globally
//bind function: means to trigger after the directive has been bind to the elemwnt
//el: the element involved
//binding: means the info about the connection
//vnode: means virtual node on the DOM
Vue.directive('rainbow',{
  bind(el){
    el.style.color =  "#" + Math.random().toString().slice(2,8);
  }
});


Vue.directive('theme',{
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg =='column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

//custom directives


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
