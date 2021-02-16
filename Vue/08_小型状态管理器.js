import Vue from 'vue'
export const state = Vue.observable({
    count: 0
})

export const mutations = {
    SET_COUNT(payload) {
        if(payload) {
            state.count = payload
        }
    }
}

//
/** 使用
 * <div @click="setCount">{{ count }}</div>
 * import { state, mutations } from './store.js'
 * export default {
 *     computed: {
 *         count() {
 *             return state.count
 *         }
 *     },
 *     methods: {
 *         setCount() {
 *             mutations.SET_COUNT(100)
 *         }
 *     }
 * }
 *  */