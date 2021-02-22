const Child = {
    name: 'Child',
    setup(props, { emit }) {
        emit('change', 1, 5)
        emit('change-page-name', 2, 105)
    },
    render(proxy) {
        // this === proxy
        console.log(123, proxy)
        proxy.$emit('change', 2, 10)
        return <div>7777</div>
    }
}

export default {
    name: 'Customer3',
    setup() {},
    render() {
        return (
            <div>
                88888
                <Child
                    message={'this is message'}
                    onChange={(a, b) => {
                        console.log(a + '-' + b)
                    }}
                    onChangePageName={(a, b) => {
                        console.log(a, b)
                    }}
                />
            </div>
        )
    }
}
