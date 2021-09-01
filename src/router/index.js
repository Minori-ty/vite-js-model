import { createWebHashHistory, createRouter } from 'vue-router'
import NProgress from 'nprogress'
import { isMobile } from 'utils/isMobile.js'

let flag = isMobile()
let router = null

if (flag) {
    // 移动端的路由
    router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: () => import('mobile/m-Layout/m-Layout.vue'),
                redirect: '/home',
                children: [
                    {
                        path: '/home',
                        meta: { title: '首页' },
                        component: () => import('mobile/m-Home/m-Home.vue'),
                    },
                    {
                        path: '/404',
                        meta: { title: '404' },
                        component: () => import('mobile/m-404/m-404.vue'),
                    },
                ],
            },
        ],
    })
} else {
    // pc端的路由
    router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: () => import('PC/pc-Layout/pc-Layout.vue'),
                redirect: '/home',
                children: [
                    {
                        path: '/home',
                        meta: { title: '首页' },
                        component: () => import('PC/pc-Home/pc-Home.vue'),
                    },
                    {
                        path: '/404',
                        meta: { title: '404' },
                        component: () => import('PC/pc-404/pc-404.vue'),
                    },
                ],
            },
        ],
    })
}

router.beforeEach((to, from, next) => {
    NProgress.start()
    // next()
    if (to.matched.length === 0) {
        // 如果未匹配到路由
        from.name ? next({ name: from.name }) : next('/404')
    } else {
        next() // 如果匹配到正确跳转
    }
})

router.afterEach(to => {
    NProgress.done()
    document.title = `${to.meta.title}-xxx公司`
})

export default router
