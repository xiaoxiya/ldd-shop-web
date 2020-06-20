import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settings,
        app
    },
    getters
 })
//export default 定义全局变量store用于管理
export default store