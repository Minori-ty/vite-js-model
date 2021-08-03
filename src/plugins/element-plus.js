// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { ElButton, ElInput, ElScrollbar, ElCard } from 'element-plus'
// import 'element-plus/lib/theme-chalk/el-button.css'
const plugins = [ElButton, ElInput, ElScrollbar, ElCard]

export default app => {
    // app.use(ElementPlus)
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}
