import Vue from 'vue'
import Vuex from 'vuex'
import tabsview from './modules/tabsview'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tabsview
  }
})
