import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import {
//   MessageBox,
//   Table,
//   TableColumn,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Pagination,
//   Loading
// } from 'element-ui'
import App from './App'
import router from './router'

Vue.use(ElementUI)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Pagination)
// Vue.use(Loading.directive)

// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$loading = Loading.service

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
