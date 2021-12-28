import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Iconly from './components/Iconly/Iconly'
createApp(App).use(Iconly).use(router).mount('#app')
