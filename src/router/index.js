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
                {
                    path: '/mobile',
                    component: () => import('../mobile/mobile.vue'),
                },
                {
                    path: '/phone',
                    component: () => import('../mobile/phone.vue'),
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
