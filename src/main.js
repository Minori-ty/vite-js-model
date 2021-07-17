import { createApp } from 'vue'
import router from 'router'
import store from './store'
import 'normalize.css'
import 'styles/index.scss'
import 'styles/global.less'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
