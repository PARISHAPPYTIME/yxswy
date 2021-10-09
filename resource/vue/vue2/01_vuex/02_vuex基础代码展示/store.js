import Vue from 'vue'
import * as types from './mutations-types'
import Vuex from 'vuex'

Vue.use(Vuex)

import modelValue from './model_value'

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        getState: function(state) {
            return state.count + 1
        }
    },
    mutations: {
        [types.ADD_COUNT](state, n) {
            state.count += n
        },
        [types.DEL_COUNT](state, n) {
            state.count -= n
        }
    },
    actions: {
        addFun(context, n) {
            context.commit(types.ADD_COUNT, n)
        },
        delFun(context, n) {
            context.commit(types.DEL_COUNT, n)
        }
    },
    modules: {
        modelValue
    }
})
