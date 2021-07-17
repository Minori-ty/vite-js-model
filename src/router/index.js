import { createWebHashHistory, createRouter } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('views/Layout.vue'),
      children: [
        {
          path: '/login',
          component: () => import('views/Home.vue'),
        },
      ],
    },
    // {
    //   path: '/login',
    //   component: () => import('components/Login.vue'),
    // },
  ],
})

export default router
