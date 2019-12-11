import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './static/css/theme-1.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import showdown from 'showdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css' //样式文件
// 引用API文件
import api from '../api/http'

// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 在main.js定义自定义指令 
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})