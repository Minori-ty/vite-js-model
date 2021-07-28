import { createApp } from 'vue'
import router from 'router'
import store from './store'
import 'normalize.css'
import 'styles/index.scss'
import 'styles/global.less'
// import 'styles/mobile.css'
import ElementPlus from './plugins/element-plus'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
