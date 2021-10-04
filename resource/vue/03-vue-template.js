/*

原生事件中表示事件本身,可以通过$event.target获得事件所在的DOM对象

<template>
    <div>
        <input type="text" @input="inputHandler('hello', $event)" />
    </div>
</template>
export default {
    methods: {
        inputHandler(msg, e) {
            console.log(e.target.value)
        }
    }
}

*/