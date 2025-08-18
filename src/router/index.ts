import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../page/HomePage.vue'
import TechSharePage from '../page/TechSharePage.vue'
import ToolPage from '../page/ToolPage.vue'
import AboutPage from '../page/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tech-share',
    name: 'TechShare',
    component: TechSharePage
  },
  {
    path: '/tools',
    name: 'Tools',
    component: ToolPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router