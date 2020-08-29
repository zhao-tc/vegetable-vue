import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../components/About'
import MainPage from '../components/MainPage'
import ShopCart from "../components/ShopCart"
import Wish from "../components/Wish"
import Login from "../components/Login"
import Order from "../components/Order";
import Register from "../components/Register"
import Person from "../components/Person"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/home', redirect: '/home/mainPage',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/home/about',
          name: 'About',
          component: About
        } ,
        {
          path: '/home/mainPage',
          name: 'MainPage',
          component: MainPage
        },
        {
          path: '/home/shopCart',
          name: 'ShopCart',
          component: ShopCart,
        } ,
        {
          path: '/home/Wish',
          name: 'Wish',
          component: Wish
        },
        {
          path: '/home/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/home/person',
          name: 'Person',
          component: Person
        }
      ]
    },



]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
