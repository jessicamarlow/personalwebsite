import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import Fun from "./components/Fun.vue";
import Contact from "./components/Contact.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/projects', component: Projects},
  {path: '/fun', component: Fun},
  {path: '/contact', component: Contact},
  {path: '*', redirect: '/'}
];

const router = new VueRouter({routes});

/*
 https://github.com/vuejs/vue-router/blob/dev/examples/auth-flow/app.js
 */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
