import { createApp } from 'vue'
import router from 'router'
import store from './store'
import 'normalize.css'
import 'styles/index.scss'
import 'styles/global.less'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
