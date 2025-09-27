import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/page/home/index.vue'
import TechSharePage from '@/page/techSharePage/index.vue'
import ToolPage from '@/page/toolPage/index.vue'
import AboutPage from '@/page/about/index.vue'
import BlogDetail from '@/page/Blog/edit.vue'

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
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true
  },
  // {
  //   path: '/subapp-interview-questions',
  //   name: 'InterviewQuestions',
  //   // component: InterviewQuestions,
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router