import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import router, { setupRouter } from './router'

async function bootstrap() {
    const app = createApp(App)

    setupStore(app)

    setupRouter(app)

    await router.isReady()

    app.mount('#app')
}

bootstrap().then(() => {
    console.log('welcome')
})
