import * as types from './mutations-types'
const modelValue = {
    state: {
        value: 100
    },
    getters: {
        getValue: function (state) {
            return state.value
        }
    },
    mutations: {
        [types.ADD_VALUE](state) {
            state.value += 100
        }
    },
    actions: {
        addValue(context) {
            context.commit(types.ADD_VALUE)
        }
    }
}

export default modelValue
