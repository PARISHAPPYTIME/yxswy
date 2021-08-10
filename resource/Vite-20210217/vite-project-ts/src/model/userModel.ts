import { ref, reactive, onMounted } from 'vue'
import request from '../utils/request'

interface stateType {
    loading: boolean
    list: any[]
}

interface useListType {
    state: stateType
    getList: any
}

interface resultBackType {
    data: any[]
    total: number
}

export function useList(): useListType {
    const state: stateType = reactive({
        loading: false,
        list: []
    })

    const getList = () => {
        state.loading = true
        return request({
            url: '/getUsers',
            method: 'get'
        })
            .then((res: any): void => {
                // 设置列表数据
                state.list = res.data
            })
            .finally(() => {
                state.loading = false
            })
    }

    return {
        state,
        getList
    }
}

export function useItem(id: string) {
    const defaultData = Object.create(null)
    const model = ref(Object.assign({}, defaultData))

    // 初始化时，根据isEdit判定是否需要获取详情
    onMounted(() => {
        if (id) {
            // 获取详情
            request({
                url: '/getUser',
                method: 'get',
                params: { id }
            }).then(({ data }) => {
                model.value = data
            })
        }
    })
    return { model }
}
